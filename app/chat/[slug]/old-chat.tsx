'use client'
import { useChat } from '@ai-sdk/react'

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxSteps: 5,
		api: '/api/chat', // Ensure this matches your API route path
	})

	const extractImageFromMarkdown = (text: string) => {
		// This regex looks for markdown image syntax: ![alt text](data:image/jpeg;base64,DATA)
		const regex = /!\[.*?\]\((data:image\/[^;]+;base64,[^)]+)\)/g
		const matches = text.match(regex)

		if (matches && matches.length > 0) {
			// Extract just the base64 data URL from the first match
			const urlRegex = /(data:image\/[^;]+;base64,[^)]+)/
			const urlMatch = matches[0].match(urlRegex)

			if (urlMatch && urlMatch[1]) {
				return urlMatch[1]
			}
		}

		return null
	}

	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch overflow-scroll mb-20">
			{messages.map(message => (
				<div key={message.id} className="whitespace-pre-wrap mb-4">
					<strong>{message.role === 'user' ? 'User: ' : 'AI: '}</strong>

					{message.parts.map((part, i) => {
						switch (part.type) {
							case 'text': {
								// Check if text contains embedded image in markdown format
								const imageUrl = extractImageFromMarkdown(part.text)

								if (imageUrl) {
									// If an image is found in the text, display both text and image
									const textWithoutImage = part.text.replace(/!\[.*?\]\(data:image\/[^;]+;base64,[^)]+\)/g, '')

									return (
										<div key={`${message.id}-${i}`}>
											<div>{textWithoutImage}</div>
											<div className="mt-2">
												<p className="text-sm text-zinc-500 mb-1">🖼️ Generated Image</p>
												<img src={imageUrl} alt="AI Generated Image" className="rounded-lg shadow max-w-full" />
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

								// Debug logging
								console.log('Tool invocation result:', result)

								if (result.error) {
									return (
										<div key={`${message.id}-${i}`} className="text-sm text-red-500">
											⚠️ {result.error}
										</div>
									)
								}

								return result.state === 'result' && result.result.imageBase64 ? (
									<div key={`${message.id}-${i}`} className="mt-2">
										<p className="text-sm text-zinc-500 mb-1">🖼️ Generated Image: {result.result.imagePrompt}</p>
										<img
											src={`${result.result.imageBase64}`}
											alt={result.result.imagePrompt || 'AI Generated Image'}
											className="rounded-lg shadow max-w-full"
										/>
									</div>
								) : (
									<div key={`${message.id}-${i}`} className="text-sm text-red-500">
										⚠️ No image data received.
									</div>
								)
							}

							default:
								return null
						}
					})}
				</div>
			))}

			<form onSubmit={handleSubmit}>
				<input
					className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
					value={input}
					placeholder="Say something like: generate an image of a futuristic city..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	)
}
