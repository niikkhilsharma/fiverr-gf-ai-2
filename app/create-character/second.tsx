'use client'

import Image from 'next/image'
import { FemaleModelTypes } from './page'
import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'

export default function Second({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: FemaleModelTypes
	setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>>
}) {
	const ethnicity = [
		{ name: 'Asian', image: '/assets/create-ai/ethnicity/asian.webp' },
		{ name: 'Caucasian', image: '/assets/create-ai/ethnicity/caucasian.webp' },
		{ name: 'latina', image: '/assets/create-ai/ethnicity/latina.webp' },
	]

	const eyeColor = [
		{ color: 'Brown', image: '/assets/create-ai/eye/brown.webp' },
		{ color: 'Blue', image: '/assets/create-ai/eye/blue.webp' },
	]
	return (
		<div className="space-y-8">
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Ethnicity</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					{ethnicity.map((ethnic, index) => (
						<div
							key={index}
							className={cn(
								'flex gap-4 justify-center items-center relative',
								femaleModel.ethinicity === ethnic.name && 'ring-2 ring-primary rounded-md overflow-hidden shadow-md'
							)}
							onClick={() => setFemaleModel(prev => ({ ...prev, ethinicity: ethnic.name }))}>
							<Image
								src={ethnic.image}
								width={200}
								height={300}
								alt="girl-image"
								className="object-cover rounded-lg overflow-hidden aspect-square w-44 h-44"
							/>
							<p className="absolute bottom-2 bg-muted-foreground px-1.5 py-0.5 text-sm rounded-full">{ethnic.name}</p>
						</div>
					))}
				</div>
			</div>

			{/* Choosing Age */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Ethnicity</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					<div
						onClick={() => setFemaleModel(prev => ({ ...prev, age: '18+' }))}
						className={cn(
							'border rounded-md px-3 py-1 bg-pink-800/90 border-white/50 hover:cursor-pointer hover:bg-pink-800/80',
							femaleModel.age === '18+' && 'ring-2 ring-primary'
						)}>
						Teen 18+
					</div>
					<div
						onClick={() => setFemaleModel(prev => ({ ...prev, age: '20s' }))}
						className={cn(
							'border rounded-md px-3 py-1 bg-pink-800/90 border-white/50 hover:cursor-pointer hover:bg-pink-800/80',
							femaleModel.age === '20s' && 'ring-2 ring-primary'
						)}>
						20s
					</div>
				</div>
			</div>

			{/* Choose Eye Color */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Eye Color</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					{eyeColor.map((eye, index) => (
						<div
							key={index}
							className={cn(
								'flex gap-4 justify-center items-center relative hover:cursor-pointer overflow-hidden rounded-lg',
								femaleModel.eyeColor === eye.color && 'ring-2 ring-primary'
							)}
							onClick={() => setFemaleModel(prev => ({ ...prev, eyeColor: eye.color }))}>
							<Image
								src={eye.image}
								width={120}
								height={56}
								alt="girl-image"
								className="object-cover overflow-hidden h-20 hover:scale-110 duration-200 transition-all"
							/>
							<p className="absolute bottom-1 bg-muted-foreground px-1 py-0 text-xs rounded-full">{eye.color}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
