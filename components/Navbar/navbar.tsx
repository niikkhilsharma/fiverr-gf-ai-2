import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ActiveGenderTab from './active-gender'
import { auth } from '@/auth'

const Navbar = async () => {
	const session = await auth()
	const user = session?.user

	return (
		<div className="border-b h-16 px-4 sm:px-8 flex justify-between items-center w-full z-50 bg-background fixed top-0">
			<div className="flex items-center gap-4 h-full">
				<Link href={'/'} className="text-3xl font-semibold">
					<Image src={'/assets/logo.jpg'} alt="logo" width={500} height={500} className="w-12" />
				</Link>
				<ActiveGenderTab />
			</div>
			<div>
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarImage src={user?.image || 'https://github.com/shadcn.png'} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="font-bold flex gap-1 text-sm">
						My Profile
						<ChevronDown className="font-light" size={20} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
