'use client'

import React from 'react'
import Image from 'next/image'
import { AlignJustify, ChevronDown, Mars, Shell, Venus } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navbar = () => {
	const [activeGender, setActiveGender] = React.useState('girls')

	return (
		<div className="border-b h-16 px-4 sm:px-8 flex justify-between items-center w-full z-50 relative bg-background">
			<div className="flex items-center gap-4 h-full">
				<AlignJustify />
				<h1 className="text-3xl font-semibold">
					<Image src={'/logo-whole-white.svg'} alt="logo" width={656} height={87} className="w-44 min-w-44" />
				</h1>
				<div className="flex gap-4 font-semibold ml-20 h-full text-sm">
					<Link
						onClick={() => setActiveGender('girls')}
						href={`/?gender=girls`}
						className={cn('flex items-center gap-1 px-2', activeGender === 'girls' && 'border-b-3 border-destructive-foreground')}>
						<Venus size={17} />
						Girls
					</Link>
					<Link
						onClick={() => setActiveGender('anime')}
						href={`/?gender=anime`}
						className={cn('flex items-center gap-1 px-2', activeGender === 'anime' && 'border-b-3 border-destructive-foreground')}>
						<Shell size={17} /> Anime
					</Link>
					<Link
						onClick={() => setActiveGender('guys')}
						href={`/?gender=guys`}
						className={cn('flex items-center gap-1 px-2 ', activeGender === 'guys' && 'border-b-3 border-destructive-foreground')}>
						<Mars size={17} />
						Guys
					</Link>
				</div>
			</div>
			<div>
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p></p>
					<div className="font-bold flex gap-1 text-sm">
						My Profile <ChevronDown className="font-light" size={20} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
