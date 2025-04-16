import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { FemaleModelTypes } from './page'

export default function First({ setFemaleModel }: { setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>> }) {
	return (
		<div className="w-full">
			<h1 className="text-xl font-semibold text-center">Choose Your Style</h1>
			<div className="flex gap-4 justify-center items-center my-4">
				<Image
					src={'/assets/create-ai/female/real.webp'}
					width={500}
					height={780}
					alt="girl-image"
					className={cn('object-cover rounded-lg overflow-hidden aspect-square')}
					onClick={() => {}}
				/>
				<Image
					src={'/assets/create-ai/female/anime.webp'}
					width={500}
					height={780}
					alt="girl-image"
					className={cn('object-cover rounded-lg overflow-hidden aspect-square')}
				/>
			</div>
		</div>
	)
}
