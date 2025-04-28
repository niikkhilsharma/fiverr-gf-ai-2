import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Brush, Compass, Dot, Fan, Gem, HeartHandshakeIcon, ImagePlusIcon, PhoneCallIcon, TrophyIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

export function AppSidebar() {
	const menuItems = [
		{ title: 'Home', href: '/', icon: Compass },
		{ title: 'Collection', href: '/collection', icon: ImagePlusIcon },
		{ title: 'Generate Image', href: '/create-character', icon: Fan },
		{ title: 'Create Character', href: '/create-character', icon: Brush },
		{ title: 'My AI', href: '/my-ai', icon: HeartHandshakeIcon },
		{ title: 'Become Premium', href: '/become-premium', icon: Gem },
	]

	const promotionItems = [
		{ title: 'Discord', icon: '/assets/icons/discord.svg', href: 'https://discord.gg/5m7w5p4y' },
		{
			title: 'Contact Us',
			icon: PhoneCallIcon,
			href: 'mailto:hi@fiverr.com',
		},
		{ title: 'Affiliate', icon: TrophyIcon, href: 'https://fiverr.com/affiliates/new' },
	]

	return (
		<Sidebar className="pt-16">
			<SidebarHeader className="bg-background" />
			<SidebarContent className="bg-background">
				<SidebarGroup className="px-4 sm:px-8">
					<SidebarGroupContent>
						<SidebarMenu className="space-y-2">
							{menuItems.map((item, indx) => (
								<SidebarMenuItem key={indx}>
									<SidebarMenuButton asChild>
										<Link href={item.href} className={cn(buttonVariants({ variant: 'outline' }), 'justify-start max-w-48 pl-4')}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup className="mt-auto px-0">
					<Separator className="mb-4" />
					<SidebarGroupContent className="px-4 sm:px-8">
						<SidebarMenu className="space-y-2">
							{promotionItems.map((item, indx) => (
								<SidebarMenuItem key={indx}>
									<SidebarMenuButton asChild>
										<Link href={item.href} className={cn(buttonVariants({ variant: 'outline' }), 'justify-start max-w-48 pl-4')}>
											{indx !== 0 ? (
												<item.icon className="mr-2 h-5 w-5" />
											) : (
												<Image src={item.icon as string} alt={item.title} width={20} height={20} className="mr-2 h-4 w-4" />
											)}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="bg-background">
				<SidebarGroup className="flex items-center justify-between py-0">
					<SidebarGroupLabel className="h-4 text-[0.5rem]">
						Privacy Notice <Dot /> Terms of Service
					</SidebarGroupLabel>
				</SidebarGroup>
			</SidebarFooter>
			{/* <SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> Username
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
								<DropdownMenuItem>
									<span>Account</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Billing</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter> */}
		</Sidebar>
	)
}
