'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Mars, Shell, Venus } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function ActiveGenderTab() {
	const searchParams = useSearchParams()
	const activeGender = searchParams.get('gender') || 'girls'

	return (
		<div className="flex gap-4 font-semibold ml-20 h-full text-sm">
			<Link
				href={`/?gender=girls`}
				className={cn('flex items-center gap-1 px-2', activeGender === 'girls' && 'border-b-3 border-destructive-foreground')}>
				<Venus size={17} />
				Girls
			</Link>
			<Link
				href={`/?gender=anime`}
				className={cn('flex items-center gap-1 px-2', activeGender === 'anime' && 'border-b-3 border-destructive-foreground')}>
				<Shell size={17} /> Anime
			</Link>
			<Link
				href={`/?gender=guys`}
				className={cn('flex items-center gap-1 px-2 ', activeGender === 'guys' && 'border-b-3 border-destructive-foreground')}>
				<Mars size={17} />
				Guys
			</Link>
		</div>
	)
}
