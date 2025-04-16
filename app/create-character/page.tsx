'use client'
import React from 'react'
import { ArrowLeft, ArrowRight, Pencil } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
import Summary from './summary'

export type FemaleModelTypes = {}

export default function CreateCharacter() {
	const [currentCount, setCurrentCount] = React.useState<number>(1)
	const [femalModel, setFemaleModel] = React.useState<FemaleModelTypes>({})

	return (
		<div className="p-4 w-full max-h-screen h-full pb-20 overflow-y-scroll">
			<h1 className="flex gap-2 text-4xl font-bold justify-center items-center">
				<Pencil />
				Create my AI
			</h1>

			<div className="mt-20 w-full flex justify-center items-center flex-col gap-8 max-w-3xl mx-auto">
				<div className="flex items-center mx-auto justify-between w-full gap-4 sm:gap-8 px-8">
					{Array.from({ length: 9 }, (_, i) => i + 1).map(i => (
						<div
							key={i}
							className={cn(
								'w-3 h-3 aspect-square rounded-full ring-4 ring-destructive-foreground/20',
								i <= currentCount ? 'bg-white ring-white' : 'bg-destructivew ring-foreground/15'
							)}></div>
					))}
				</div>
				<Card className="w-full bg-foreground/10">
					<CardContent>
						{currentCount === 1 && <First setFemaleModel={setFemaleModel} />}
						{currentCount === 2 && <Second />}
						{currentCount === 3 && <Third />}
						{currentCount === 4 && <Fourth />}
						{currentCount === 5 && <Fifth />}
						{currentCount === 6 && <Sixth />}
						{currentCount === 7 && <Summary />}
					</CardContent>
					<CardFooter>
						<div className="flex justify-center items-center gap-4 w-[-webkit-fill-available] mt-4">
							<Button
								onClick={() => {
									setCurrentCount(prev => prev - 1)
								}}
								variant={'destructive'}
								className="w-1/2 bg-destructive hover:bg-destructive/90"
								size={'lg'}>
								Previous <ArrowLeft />
							</Button>
							<Button
								onClick={() => {
									setCurrentCount(prev => prev + 1)
								}}
								variant={'destructive'}
								className="w-1/2 bg-destructive-foreground hover:bg-destructive-foreground/90"
								size={'lg'}>
								Next <ArrowRight />
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
