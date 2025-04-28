'use client'

import { HardHat, BookHeart, Briefcase, LucideTextSearch, Heart, Transgender, Crown, Gem } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FemaleModelTypes } from './page'
import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'

export default function Sixth({
	femaleModel,
	setFemaleModel,
}: {
	femaleModel: FemaleModelTypes
	setFemaleModel: Dispatch<SetStateAction<FemaleModelTypes>>
}) {
	const relationship = [
		{ name: 'Stranger', icon: HardHat },
		{ name: 'School Mate', icon: BookHeart },
		{ name: 'Friend', icon: Briefcase },
		{ name: 'Mentor', icon: LucideTextSearch },
		{ name: 'Lover', icon: Heart },
		{ name: 'Sex Friend', icon: Transgender },
		{ name: 'Mistress', icon: Crown },
		{ name: 'Wife', icon: Gem },
	]
	return (
		<div>
			<h1 className="text-2xl font-bold">Choose Relationship</h1>
			<div className="flex flex-wrap gap-4 justify-center items-center mt-4">
				{relationship.map((relationship, index) => (
					<div
						onClick={() => setFemaleModel(prev => ({ ...prev, relationship: relationship.name }))}
						key={index}
						className={cn(
							'flex flex-col w-48 aspect-video p-2 rounded-md bg-muted hover:bg-muted/80 hover:cursor-pointer border gap-4 justify-center items-center relative',
							femaleModel.relationship === relationship.name && 'ring-2 ring-primary'
						)}>
						<p className="text-sm text-center">
							<relationship.icon />
						</p>
						<Badge>{relationship.name}</Badge>
					</div>
				))}
			</div>
		</div>
	)
}
