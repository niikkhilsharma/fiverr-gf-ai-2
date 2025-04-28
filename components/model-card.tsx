import { AIFemaleCharacter } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

const ModelCard = ({ model }: { model: AIFemaleCharacter }) => {
	return (
		<Link
			href={`/chat/${model.id}`}
			className="max-w-64 w-full border rounded-xl overflow-hidden relative h-96 hover:cursor-pointer">
			<div className="absolute top-0 h-full">
				<Image
					src={model.image}
					alt={model.name}
					width={200}
					height={200}
					className="h-full w-full object-cover object-left-top scale-115 hover:scale-125 transition-all duration-300"
				/>
			</div>
		</Link>
	)
}

export default ModelCard
