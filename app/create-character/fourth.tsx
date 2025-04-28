'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FemaleModelTypes } from './page'
import { Dispatch, SetStateAction } from 'react'

export default function Fourth({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: FemaleModelTypes
	setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>>
}) {
	const bodyType = [
		{ name: 'Slim', image: '/assets/create-ai/body-type/slim.webp' },
		{ name: 'Athletic', image: '/assets/create-ai/body-type/athletic.webp' },
		{ name: 'Voluptuous', image: '/assets/create-ai/body-type/voluptuous.webp' },
	]

	const brestSize = [
		{ name: 'Small', image: '/assets/create-ai/brest-size/small.webp' },
		{ name: 'Medium', image: '/assets/create-ai/brest-size/medium.webp' },
		{ name: 'Huge', image: '/assets/create-ai/brest-size/huge.webp' },
	]

	const butSize = [
		{ name: 'Medium', image: '/assets/create-ai/but-size/medium.webp' },
		{ name: 'Large', image: '/assets/create-ai/but-size/large.webp' },
		{ name: 'Athletic', image: '/assets/create-ai/but-size/athletic.webp' },
	]

	return (
		<div className="space-y-8">
			{/* Choose Body Type */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Body Type</h1>
				<div>
					<div className="flex gap-4 justify-center items-center mt-6">
						{bodyType.map((hair, index) => (
							<div
								key={index}
								className={cn(
									'flex gap-4 justify-center items-center relative rounded-lg overflow-hidden',
									femaleModel.bodyType === hair.name && 'ring-2 ring-primary'
								)}
								onClick={() => setFemaleModel(prev => ({ ...prev, bodyType: hair.name }))}>
								<Image src={hair.image} width={120} height={56} alt="girl-image" className="object-cover" />
								<p className="absolute bottom-2 bg-muted-foreground px-3 py-0 text-sm rounded-full">{hair.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Choose Brest Size */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Brest Size</h1>
				<div>
					<div className="flex gap-4 justify-center items-center mt-6">
						{brestSize.map((hair, index) => (
							<div
								key={index}
								className={cn(
									'flex gap-4 justify-center items-center relative rounded-lg overflow-hidden',
									femaleModel.breastSize === hair.name && 'ring-2 ring-primary'
								)}
								onClick={() => setFemaleModel(prev => ({ ...prev, breastSize: hair.name }))}>
								<Image src={hair.image} width={120} height={56} alt="girl-image" className="object-cover" />
								<p className="absolute bottom-2 bg-muted-foreground px-3 py-0 text-sm rounded-full">{hair.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Choose But Size */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose But Size</h1>
				<div>
					<div className="flex gap-4 justify-center items-center mt-6">
						{butSize.map((hair, index) => (
							<div
								key={index}
								className={cn(
									'flex gap-4 justify-center items-center relative rounded-lg overflow-hidden',
									femaleModel.butSize === hair.name && 'ring-2 ring-primary'
								)}
								onClick={() => setFemaleModel(prev => ({ ...prev, butSize: hair.name }))}>
								<Image src={hair.image} width={120} height={56} alt="girl-image" className="object-cover" />
								<p className="absolute bottom-2 bg-muted-foreground px-3 py-0 text-sm rounded-full">{hair.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
