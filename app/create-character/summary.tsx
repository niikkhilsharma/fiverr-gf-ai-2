import Image from 'next/image'
import { FemaleModelTypes } from './page'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export default function Summary({ femaleModel }: { femaleModel: FemaleModelTypes }) {
	console.log(femaleModel)

	const hairColor = [
		{ color: 'Blonde', colorCode: '#C8A27B' },
		{ color: 'Brunette', colorCode: '#8B5337' },
		{ color: 'Black', colorCode: '#000000' },
	]

	return (
		<div>
			<h1 className="text-2xl font-bold text-center">Summary</h1>
			<div className="flex gap-4 justify-center items-center mt-4 sm:gap-8 flex-wrap">
				{/* Real or Anime */}
				<div>
					<h3 className="text-center">Style</h3>
					<div className="mt-2 flex justify-center items-center relative">
						{femaleModel.style === 'real' ? (
							<Image
								src={'/assets/create-ai/female/real.webp'}
								width={500}
								height={780}
								alt="girl-image"
								className={cn('object-cover w-32 rounded-lg overflow-hidden aspect-square shadow-md')}
							/>
						) : (
							<Image
								src={'/assets/create-ai/female/anime.webp'}
								width={500}
								height={780}
								alt="girl-image"
								className={cn('object-cover w-32 rounded-lg overflow-hidden aspect-square shadow-md')}
							/>
						)}
						<Badge className="absolute bottom-2">{femaleModel.style}</Badge>
					</div>
				</div>

				{/* Ethnicity */}
				<div>
					<h3 className="text-center">Ethnicity</h3>
					<div className={cn('flex gap-4 justify-center items-center relative mt-2')}>
						<Image
							src={`/assets/create-ai/ethnicity/${femaleModel.ethinicity.toLowerCase()}.webp`}
							width={200}
							height={300}
							alt="girl-image"
							className="object-cover w-32 rounded-lg overflow-hidden aspect-square"
						/>
						<Badge className="absolute bottom-2">{femaleModel.ethinicity}</Badge>
					</div>
				</div>

				{/* Age */}
				<div>
					<h3 className="text-center">Age</h3>
					<div className="border border-primary w-32 h-32 aspect-square mt-2 rounded-lg flex justify-center items-center">
						<p className="text-4xl font-bold">{femaleModel.age}</p>
					</div>
				</div>

				{/* Eye Color */}
				<div>
					<h3 className="text-center">Eye Colors</h3>
					<div className="flex gap-4 justify-center items-center mt-2 relative">
						<Image
							src={`/assets/create-ai/eye/${femaleModel.eyeColor.toLowerCase()}.webp`}
							width={200}
							height={300}
							alt="girl-image"
							className="rounded-lg overflow-hidden aspect-square w-32 object-fill"
						/>
						<Badge className="absolute bottom-2">{femaleModel.eyeColor}</Badge>
					</div>
				</div>

				{/* Hair Style */}
				<div>
					<h3 className="text-center">Hair Styles</h3>
					<div className="flex gap-4 justify-center items-center mt-2 relative">
						<Image
							src={`/assets/create-ai/hair-style/${femaleModel.hairStyle.toLowerCase()}.webp`}
							width={120}
							height={56}
							alt="girl-image"
							className="object-cover rounded-lg w-32 aspect-square"
						/>
						<Badge className="absolute bottom-2">{femaleModel.hairStyle}</Badge>
					</div>
				</div>

				{/* Hair Color */}
				<div>
					<h3 className="text-center">Hair Colors</h3>
					<div className="relative flex justify-center items-center mt-2">
						<div
							style={{ backgroundColor: hairColor.find(hair => hair.color === femaleModel.hairColor)?.colorCode }}
							className={cn(
								`px-8 py-2 w-32 aspect-square rounded-lg flex justify-center items-center hover:opacity-80 hover:text-white hover:cursor-pointer`
							)}>
							{femaleModel.hairColor}
						</div>
						<Badge className="absolute bottom-2">{femaleModel.hairColor}</Badge>
					</div>
				</div>

				{/* Body Types */}
				<div>
					<h3 className="text-center">Body Types</h3>
					<div className="flex gap-4 justify-center items-center mt-2 relative">
						<Image
							src={`/assets/create-ai/body-type/${femaleModel.bodyType.toLowerCase()}.webp`}
							width={120}
							height={56}
							alt="girl-image"
							className="object-cover rounded-lg w-32 aspect-square"
						/>
						<Badge className="absolute bottom-2">{femaleModel.bodyType}</Badge>
					</div>
				</div>

				{/* Breast Size */}
				<div>
					<h3 className="text-center">Breast Size</h3>
					<div className="flex gap-4 justify-center items-center mt-2 relative">
						<Image
							src={`/assets/create-ai/brest-size/${femaleModel.breastSize.toLowerCase()}.webp`}
							width={120}
							height={56}
							alt="girl-image"
							className="object-cover rounded-lg w-32 aspect-square"
						/>
						<Badge className="absolute bottom-2">{femaleModel.breastSize}</Badge>
					</div>
				</div>

				{/* Butt Size */}
				<div>
					<h3 className="text-center">Butt Size</h3>
					<div className="flex gap-4 justify-center items-center mt-2 relative">
						<Image
							src={`/assets/create-ai/but-size/${femaleModel.butSize.toLowerCase()}.webp`}
							width={120}
							height={56}
							alt="girl-image"
							className="object-cover rounded-lg w-32 aspect-square"
						/>
						<Badge className="absolute bottom-2">{femaleModel.butSize}</Badge>
					</div>
				</div>

				{/* Personality */}
				<div>
					<h3 className="text-center">Personality</h3>
					<div className="flex gap-4 justify-center items-center mt-2">
						<div className="aspect-square w-32 text-lg rounded-lg border border-primary flex justify-center items-center">
							{femaleModel.personality}
						</div>
					</div>
				</div>

				{/* Relationship */}
				<div>
					<h3 className="text-center">Relationship</h3>
					<div className="flex gap-4 justify-center items-center mt-2">
						<div className="aspect-square w-32 text-lg rounded-lg border border-primary flex justify-center items-center">
							{femaleModel.relationship}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
