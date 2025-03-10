import Image from 'next/image'
import React from 'react'

interface ModelCardProps {
	about: string
	age: number
	avatar: string
	name: string
	personality: 'Shy' | 'Playful' | 'Romantic' | 'Mysterious' | 'Confident' | 'Caring' | 'Wild' | 'Lover'
	relationship: 'Stranger' | 'Acquaintance' | 'Friend' | 'CloseFriend' | 'Lover' | 'Soulmate'
	slug: string
}

const ModelCard = ({ model }: { model: ModelCardProps }) => {
	return (
		<div className="max-w-64 w-full border rounded-xl overflow-hidden relative h-96 hover:cursor-pointer">
			<div className="absolute top-0 h-full">
				<Image
					src={model.avatar}
					alt={model.name}
					width={200}
					height={200}
					className="h-full w-full object-cover object-left-top scale-115 hover:scale-125 transition-all duration-300"
				/>
			</div>
		</div>
	)
}

export default ModelCard
