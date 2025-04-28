'use client'
import { ChatRequestOptions, UIMessage } from 'ai'
import React from 'react'
import Image from 'next/image'

// Enhanced markdown image extractor
const extractImageFromMarkdown = (text: string) => {
	// Handle markdown image format
	const markdownMatch = text.match(/!\[.*?\]\((data:image\/[^)]+)\)/)
	if (markdownMatch) return markdownMatch[1]

	// Handle raw base64
	const base64Match = text.match(/(data:image\/[^;]+;base64,[^\s"')]+)/)
	if (base64Match) return base64Match[1]

	return null
}

export default function ChatBox({
	messages,
}: {
	handleSubmit: (
		event?: {
			preventDefault?: () => void
		},
		chatRequestOptions?: ChatRequestOptions
	) => void
	input: string
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
	messages: UIMessage[]
}) {
	return (
		<div className="w-full max-h-svh relative p-4 pb-44 overflow-y-scroll">
			<div className="min-h-screen">
				{messages.map(message => (
					<div key={message.id} className="whitespace-pre-wrap mb-6">
						<strong className="block mb-2">{message.role === 'user' ? 'User: ' : 'AI: '}</strong>

						{message.parts.map((part, i) => {
							switch (part.type) {
								case 'text': {
									// Check if text contains embedded image
									const imageUrl = extractImageFromMarkdown(part.text)

									if (imageUrl) {
										// Clean the text by removing the image markdown/blob
										const cleanText = part.text
											.replace(/!\[.*?\]\(data:image\/[^)]+\)/g, '') // Remove markdown image
											.replace(/(data:image\/[^;]+;base64,[^\s"')]+)/g, '') // Remove raw base64
											.replace(/🖼️ Generated Image:.*$/gm, '') // Remove image captions
											.trim()

										// Split text by image placeholder if exists
										const textParts = cleanText.split(/\[?image\]?/i).filter(Boolean)

										return (
											<div key={`${message.id}-${i}`}>
												{textParts.length > 0 &&
													textParts.map((text, idx) => (
														<div key={idx} className="mb-3">
															{text.trim()}
														</div>
													))}

												<div className="mt-3 mb-3">
													<p className="text-sm text-zinc-500 mb-1">🖼️ Generated Image</p>
													<Image
														width={400}
														height={400}
														src={imageUrl}
														alt="AI Generated Image"
														className="rounded-lg shadow max-w-md w-full object-contain"
													/>
												</div>
											</div>
										)
									}

									// Regular text without embedded image
									return <div key={`${message.id}-${i}`}>{part.text}</div>
								}

								case 'tool-invocation': {
									const result = part.toolInvocation as {
										state: 'call' | 'result'
										result: {
											imageBase64?: string
											filename?: string
											imagePrompt?: string
										}
										error?: string
									}

									if (result.error) {
										return (
											<div key={`${message.id}-${i}`} className="text-sm text-red-500">
												⚠️ {result.error}
											</div>
										)
									}

									return result.state === 'result' && result.result.imageBase64 ? (
										<div key={`${message.id}-${i}`} className="mt-3">
											<p className="text-sm text-zinc-500 mb-1">
												🖼️ Generated Image{result.result.imagePrompt ? `: ${result.result.imagePrompt}` : ''}
											</p>
											<Image
												width={400}
												height={400}
												src={`${result.result.imageBase64}`}
												alt={result.result.imagePrompt || 'AI Generated Image'}
												className="rounded-lg shadow max-w-md w-full object-contain"
											/>
										</div>
									) : (
										<div key={`${message.id}-${i}`} className="text-sm text-zinc-500">
											Generating image...
										</div>
									)
								}

								default:
									return null
							}
						})}
					</div>
				))}
			</div>
		</div>
	)
}
