'use client'
import React from 'react'
import { ArrowLeft, ArrowRight, Loader, Pencil } from 'lucide-react'
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
import axios from 'axios'

export type FemaleModelTypes = {
	style: 'real' | 'anime'
	ethinicity: string
	age: string
	eyeColor: string
	hairStyle: string
	hairColor: string
	bodyType: string
	breastSize: string
	butSize: string
	personality: string
	relationship: string
}

export default function CreateCharacter() {
	const [loading, setLoading] = React.useState(false)
	const [currentCount, setCurrentCount] = React.useState<number>(1)
	const [femalModel, setFemaleModel] = React.useState<FemaleModelTypes>({
		style: 'real',
		ethinicity: '',
		age: '0',
		eyeColor: '',
		hairStyle: '',
		hairColor: '',
		bodyType: '',
		breastSize: '',
		butSize: '',
		personality: '',
		relationship: '',
	})

	const handleSubmit = async () => {
		try {
			Object.keys(femalModel).forEach(key => {
				// @ts-expect-error TODO: Fix this
				if (femalModel[key] === '') {
					alert('Please fill all the fields')
					return
				}
			})
			setLoading(true)

			const response = await axios.post('/api/create-character', femalModel)
			const ok = response.status === 200

			if (ok) {
				alert('Character created successfully')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="p-4 w-full max-h-screen h-full pb-20 overflow-y-scroll">
			<h1 className="flex gap-2 text-4xl font-bold justify-center items-center">
				<Pencil />
				Create my AI
			</h1>

			<div className="mt-20 w-full flex justify-center items-center flex-col gap-8 max-w-3xl mx-auto">
				<div className="flex items-center mx-auto justify-between w-full gap-4 sm:gap-8 px-8">
					{Array.from({ length: 7 }, (_, i) => i + 1).map(i => (
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
						{currentCount === 1 && <First femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 2 && <Second femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 3 && <Third femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 4 && <Fourth femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 5 && <Fifth femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 6 && <Sixth femaleModel={femalModel} setFemaleModel={setFemaleModel} />}
						{currentCount === 7 && <Summary femaleModel={femalModel} />}
					</CardContent>
					<CardFooter>
						{currentCount !== 7 ? (
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
						) : (
							<div className="flex gap-2 w-full">
								<Button
									onClick={() => {
										setCurrentCount(prev => prev - 1)
									}}
									variant={'destructive'}
									className="w-1/3 bg-destructive hover:bg-destructive/90"
									size={'lg'}>
									Previous <ArrowLeft />
								</Button>
								<Button
									onClick={() => handleSubmit()}
									disabled={loading}
									variant={'destructive'}
									className="w-2/3 bg-destructive-foreground hover:bg-destructive-foreground/90"
									size={'lg'}>
									Create AI {!loading ? <ArrowRight /> : <Loader className="animate-spin" />}
								</Button>
							</div>
						)}
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
