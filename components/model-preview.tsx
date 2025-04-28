import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { BrainIcon, ImageIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { AIFemaleCharacter } from '@prisma/client'

const ModelPreview = ({ modelData }: { modelData: AIFemaleCharacter }) => {
	return (
		<div className={'pb-20 h-svh overflow-y-auto'}>
			<Carousel opts={{}} className="w-full">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card className="rounded-none p-0">
								<CardContent className="flex aspect-square items-center justify-center p-0">
									<Image
										src={modelData.image}
										width={100}
										height={100}
										alt="Anime AI Girl Avatar"
										className="w-full h-full aspect-square"
										unoptimized
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-2 border-white" />
				<CarouselNext className="right-2 border-white" />
			</Carousel>
			<div className="px-4 py-4">
				<h1 className="text-lg font-semibold">{modelData.name}</h1>
				<p className="text-foreground/60 mt-2 max-w-[85%] text-sm">{modelData.age}</p>
				<Button className="mt-4 w-full" variant={'secondary'}>
					<ImageIcon /> Generate Image
				</Button>
			</div>
			<Separator className="w-full mt-2 mb-4" />
			<div className="px-4">
				<h3 className="font-semibold text-sm text-secondary-foreground/60">What is she like</h3>
				<div className="grid grid-cols-2 gap-x-4 mt-2">
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Personality</h6>
							<h5 className="font-semibold">{modelData.personality}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Hair Style</h6>
							<h5 className="font-semibold">{modelData.hairStyle}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Hair Color</h6>
							<h5 className="font-semibold">{modelData.hairColor}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Relationship</h6>
							<h5 className="font-semibold">{modelData.relationship}</h5>
						</div>
					</div>
				</div>
			</div>
			<Separator className="my-4" />
			<div className="px-4">
				<h3 className="font-semibold text-sm text-secondary-foreground/60">How she looks</h3>
				<div className="grid grid-cols-2 mt-2">
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Body</h6>
							<h5 className="font-semibold">
								{modelData.age}, {modelData.bodyType}
							</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Ethnicity</h6>
							<h5 className="font-semibold">{modelData.ethinicity}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Eyes</h6>
							<h5 className="font-semibold">{modelData.eyeColor}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Hair</h6>
							<h5 className="font-semibold">{modelData.hairColor}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Breast</h6>
							<h5 className="font-semibold">{modelData.breastSize}</h5>
						</div>
					</div>
					<div className="flex gap-2 text-xs items-start justify-start py-2">
						<Button size={'icon'} className="rounded-full" variant={'outline'}>
							<BrainIcon />
						</Button>
						<div>
							<h6 className="font-light uppercase text-secondary-foreground/60">Butt</h6>
							<h5 className="font-semibold">{modelData.butSize}</h5>
						</div>
					</div>
				</div>
			</div>
			<Separator className="my-4" />
			<div className="px-4">
				<h3 className="font-semibold text-sm text-secondary-foreground/60 mb-4">Gallery</h3>
				<p className="text-secondary-foreground/60 text-sm mt-2">No images yet. Generate some images</p>
				<div className="flex gap-4 flex-wrap">
					{Array.from({ length: 4 }).map((_, index) => (
						<Image key={index} width={100} height={100} src={modelData.image} alt="avatar" className="aspect-square rounded-xl" />
					))}
				</div>
			</div>
		</div>
	)
}

export default ModelPreview
