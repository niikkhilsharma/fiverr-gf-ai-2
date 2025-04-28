import axios from 'axios'
import { openai } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma/prisma'
import { auth } from '@/auth'

export async function POST(request: Request) {
	const session = await auth()

	if (!session?.user) {
		return NextResponse.json({ error: 'You are not logged in' }, { status: 401 })
	}

	try {
		const {
			style,
			ethinicity,
			age,
			eyeColor,
			hairStyle,
			hairColor,
			bodyType,
			breastSize,
			butSize,
			personality,
			relationship,
		} = await request.json()

		const result = await generateObject({
			model: openai('gpt-4o-mini', {
				structuredOutputs: true,
			}),
			schemaName: 'character',
			schemaDescription: 'A prompt to generate a character and a name.',
			schema: z.object({
				name: z.string(),
				promptToCreateCharacter: z.string(),
			}),
			prompt:
				'Generate a prompt to create a character with the following properties. The prompt I will pass on to image generation model and a name. Write the prompt in a way that the image comes out to be a real female character. And provide less of details. Make sure to put realistic person in the end of the prompt along with a comma.',
		})

		// promptToCreateCharacter
		const { name } = result.object

		// FIX: Send the prompt as an object with a prompt property
		const characterImageUrlResponse = await axios.post('http://localhost:3000/api/create-character/create-image', {
			prompt:
				'create a asian women above 18 age, brown eyes, short hairs, brunette hair, atheletic, medium size breast, athletic ass real image person full body',
		})

		if (characterImageUrlResponse.status !== 200) {
			return NextResponse.json(
				{ error: `Failed to generate image: ${characterImageUrlResponse.statusText}` },
				{ status: characterImageUrlResponse.status }
			)
		}

		// Parse the response to get the image URL
		const characterImageUrl = characterImageUrlResponse.data
		console.log(characterImageUrl)

		const character = await prisma.aIFemaleCharacter.create({
			data: {
				name,
				image: characterImageUrl,
				style,
				ethinicity,
				age,
				eyeColor,
				hairStyle,
				hairColor,
				bodyType,
				breastSize,
				butSize,
				personality,
				relationship,
				userId: session.user.id!,
			},
		})

		return NextResponse.json({ result: result.object, character })
	} catch (error) {
		console.error('Error in character creation:', error)
		return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
	}
}
