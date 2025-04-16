import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { prompt } = await request.json()
	console.log(prompt)
	try {
		const response = await fetch('https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.HUGGINGFACE_API_KEY,
			},
			body: JSON.stringify({
				inputs: prompt,
			}),
		})

		if (!response.ok) {
			throw new Error(`Image generation failed with status: ${response.status}`)
		}

		// Check if the response is actually an image
		const imageBuffer = await response.arrayBuffer()

		return NextResponse.json(
			{
				isImage: true,
				imageData: Buffer.from(imageBuffer).toString('base64'),
				filename: 'generated-image.jpg',
			},
			{
				status: 200,
				headers: {
					'Cache-Control': 'no-cache, no-store, must-revalidate',
					Pragma: 'no-cache',
					'X-Is-Image': 'true',
					Expires: '0',
				},
			}
		)
	} catch (error) {
		console.error('Error generating image:', error)
		return NextResponse.json(
			{
				isImage: false,
				message: 'Failed to generate image due to an error.',
			},
			{ status: 500 }
		)
	}
}
