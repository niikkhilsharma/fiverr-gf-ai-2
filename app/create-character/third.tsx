'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FemaleModelTypes } from './page'
import { Dispatch, SetStateAction } from 'react'

export default function Third({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: FemaleModelTypes
	setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>>
}) {
	const hairColor = [
		{ color: 'Blonde', colorCode: '#C8A27B' },
		{ color: 'Brunette', colorCode: '#8B5337' },
		{ color: 'Black', colorCode: '#000000' },
	]

	const hairStyle = [
		{ style: 'Long', image: '/assets/create-ai/hair-style/long.webp' },
		{ style: 'Short', image: '/assets/create-ai/hair-style/short.webp' },
		{ style: 'Straight', image: '/assets/create-ai/hair-style/straight.webp' },
	]

	return (
		<div className="space-y-8">
			{/* Choose Hair Style */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Hair Style</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					{hairStyle.map((hair, index) => (
						<div
							key={index}
							className={cn(
								'flex gap-4 justify-center items-center relative overflow-hidden rounded-lg',
								femaleModel.hairStyle === hair.style && 'ring-2 ring-primary'
							)}
							onClick={() => setFemaleModel(prev => ({ ...prev, hairStyle: hair.style }))}>
							<Image src={hair.image} width={120} height={56} alt="girl-image" className="object-cover" />
							<p className="absolute bottom-2 bg-muted-foreground px-3 py-0 text-sm rounded-full">{hair.style}</p>
						</div>
					))}
				</div>
			</div>

			{/* Choose Hair Color */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Hair Color</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					{hairColor.map((hair, index) => (
						<div
							key={index}
							className={cn(
								'flex gap-4 justify-center items-center relative rounded-md overflow-hidden',
								femaleModel.hairColor === hair.color && 'ring-2 ring-primary'
							)}
							onClick={() => setFemaleModel(prev => ({ ...prev, hairColor: hair.color }))}>
							<div
								style={{ backgroundColor: hair.colorCode }}
								className={cn(`px-8 py-2 flex justify-center items-center hover:opacity-80 hover:text-white hover:cursor-pointer`)}>
								{hair.color}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
