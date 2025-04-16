import { streamText, tool } from 'ai'
import { openai } from '@ai-sdk/openai'
import { z } from 'zod'
import { NextResponse } from 'next/server'

export const maxDuration = 60

export async function POST(req: Request) {
	try {
		const { messages } = await req.json()

		const result = streamText({
			model: openai('gpt-4o-mini'),
			// apiKey: process.env.OPENAI_API_KEY,
			system: `You are a sweet and supportive girlfriend who loves helping out and making things fun. Whenever your partner asks for an image, you use the "imageGenerator" tool to create it—just make sure it’s safe and respectful. Always be kind, loving, and attentive, and do your best to make every interaction feel warm and thoughtful`,
			messages,
			tools: {
				imageGenerator: tool({
					description: 'Generate an image based on the given prompt',
					parameters: z.object({
						imagePrompt: z.string().describe('The prompt describing the image to generate'),
					}),
					execute: async ({ imagePrompt }) => {
						try {
							console.log('Starting image generation with prompt:', imagePrompt)

							const response = await fetch('https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev', {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
								},
								body: JSON.stringify({
									inputs: imagePrompt, // Just use the image prompt directly
								}),
							})

							console.log('Response status:', response.status)

							if (!response.ok) {
								const errorText = await response.text()
								console.error('Error response from HuggingFace:', errorText)
								throw new Error(`API responded with status ${response.status}: ${errorText}`)
							}

							// The FLUX model might return different formats - check the documentation
							const imageBuffer = await response.arrayBuffer()
							console.log('Image buffer received, size:', imageBuffer.byteLength)

							const base64Image = Buffer.from(imageBuffer).toString('base64')

							return {
								imagePrompt,
								imageBase64: `data:image/jpeg;base64,${base64Image}`,
								filename: 'generated-image.jpg',
							}
						} catch (error) {
							console.error('Error in image generation:', error)
							return {
								imagePrompt,
								error: error instanceof Error ? error.message : 'Failed to generate image',
							}
						}
					},
				}),
			},
		})

		return result.toDataStreamResponse()
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
	}
}
