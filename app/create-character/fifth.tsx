'use client'
import { cn } from '@/lib/utils'
import { FemaleModelTypes } from './page'
import { Dispatch, SetStateAction } from 'react'

export default function Fifth({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: FemaleModelTypes
	setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>>
}) {
	const personality = [
		{ name: 'Caregiver', content: 'Nurturing, protective, and always there to offer comfort.' },
		{ name: 'Sage', content: 'Wise, knowledgeable, and always willing to share.' },
		{ name: 'Innocent', content: 'Simple, unassuming, and always willing to help.' },
		{ name: 'Jester', content: 'Playful, mischievous, and always ready to make a joke.' },
		{ name: 'Temptress', content: 'Tempting, seductive, and always willing to try new things.' },
		{ name: 'Dominant', content: 'Powerful, assertive, and always in control.' },
		{ name: 'Submissive', content: 'Stubborn, inflexible, and always in control.' },
		{ name: 'Lover', content: 'Loving, caring, and always there for you.' },
		{ name: 'Nympho', content: 'Insensitive, shy, and always there for you.' },
		{ name: 'Mean', content: 'Mean, rude, and always there for you.' },
		{ name: 'Confident', content: 'Confident, self-assured, and always there for you.' },
		{ name: 'Experimental', content: 'Experimental, risk-taking, and always there for you.' },
	]

	return (
		<div className="space-y-8">
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Personality</h1>
				<div className="flex gap-4 justify-center items-center mt-4 flex-wrap">
					{personality.map((personality, index) => (
						<div
							onClick={() => setFemaleModel(prev => ({ ...prev, personality: personality.name }))}
							key={index}
							className={cn(
								'flex flex-col w-48 aspect-video p-2 rounded-md bg-muted hover:bg-muted/80 hover:cursor-pointer border gap-4 justify-center items-center relative',
								femaleModel.personality === personality.name && 'ring-2 ring-primary'
							)}>
							<h3 className="font-semibold text-center">{personality.name}</h3>
							<p className="text-sm text-center">{personality.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
