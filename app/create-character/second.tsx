'use client'

import Image from 'next/image'

export default function Second() {
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
						<div key={index} className="flex gap-4 justify-center items-center relative">
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
					<div className="border rounded-md px-3 py-1 bg-pink-800/90 border-white/50">Teen 18+</div>
					<div className="border rounded-md px-3 py-1 bg-pink-800/90 border-white/50">20s</div>
				</div>
			</div>

			{/* Choose Eye Color */}
			<div>
				<h1 className="flex gap-2 text-2xl font-bold justify-center items-center">Choose Eye Color</h1>
				<div className="flex gap-4 justify-center items-center mt-4">
					{eyeColor.map((eye, index) => (
						<div key={index} className="flex gap-4 justify-center items-center relative">
							<Image src={eye.image} width={120} height={56} alt="girl-image" className="object-cover rounded-lg overflow-hidden" />
							<p className="absolute bottom-0 bg-muted-foreground px-1 py-0 text-xs rounded-full">{eye.color}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
