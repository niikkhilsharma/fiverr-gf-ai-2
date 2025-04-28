import { v2 as cloudinary } from 'cloudinary'
import { InferenceClient } from '@huggingface/inference'
import { NextResponse } from 'next/server'

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true, // Set to true for HTTPS
})

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY)

export async function POST(request: Request) {
	try {
		// FIX: Extract the prompt from the request body
		const body = await request.json()
		const promptToCreateCharacter = body.prompt

		if (!promptToCreateCharacter) {
			return NextResponse.json({ error: 'No prompt provided' }, { status: 400 })
		}

		console.log('Generating image with prompt:', promptToCreateCharacter)

		const image = await client.textToImage({
			provider: 'hf-inference',
			model: 'black-forest-labs/FLUX.1-dev',
			inputs: promptToCreateCharacter,
			parameters: { num_inference_steps: 5 },
		})

		const arrayBuffer = await image.arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)

		const uploadResponse = await new Promise<{ secure_url: string }>((resolve, reject) => {
			cloudinary.uploader
				.upload_stream({ resource_type: 'image' }, (error, result) => {
					if (error) reject(error)
					else resolve(result as { secure_url: string })
				})
				.end(buffer)
		})

		const profilePictureUrl = uploadResponse.secure_url

		console.log('Image uploaded successfully:', profilePictureUrl)
		return NextResponse.json(profilePictureUrl, { status: 200 })
	} catch (error) {
		console.error('Error generating or uploading image:', error)
		return NextResponse.json({ error: error instanceof Error ? error.message : 'Image generation failed' }, { status: 500 })
	}
}
