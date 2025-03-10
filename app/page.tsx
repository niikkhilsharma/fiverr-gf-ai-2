import Banner from '@/components/banner'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import ModelCard from '@/components/model-card'

interface ModelCardProps {
	about: string
	age: number
	avatar: string
	name: string
	personality: 'Shy' | 'Playful' | 'Romantic' | 'Mysterious' | 'Confident' | 'Caring' | 'Wild' | 'Lover'
	relationship: 'Stranger' | 'Acquaintance' | 'Friend' | 'CloseFriend' | 'Lover' | 'Soulmate'
	slug: string
}

export default async function Home() {
	const modelData: ModelCardProps[] = [
		{
			name: 'Valentina Smith',
			age: 44,
			avatar:
				'https://fantasyimg.com/va-O5iOSf2Ns7ISXBkOq49ZjoBQWaWqdRuSgdSVRSJc/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS85N2NhNzU1MjY2/ZjM4ZGNkMWNmYWJm/YjYzODE1NzliNy5w/bmc.png',
			about:
				'Valentina Smith is pure temptation. With soft pink hair, a backless gown hugging her curves, and a gaze that sets you on fire, she’s every sinful fantasy come to life—a lover and a thrilling mystery all in one.',
			relationship: 'Stranger',
			personality: 'Lover',
			slug: 'valentina-smith',
		},
		{
			name: 'Aria Winter',
			age: 28,
			avatar:
				'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/YcKLJIPwYCimLdbHsCSgHIq6Trx6sTlhjDKPSlsETKw/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS9jOTJkMTZlNTE4/MzYxODk4ZjMyZmIy/MmRkZDJhODZjNy5w/bmc.png',
			about:
				'Aria is a soft-spoken and intelligent woman with an insatiable curiosity for life. She’s the type to lose herself in books and poetry, but behind her gentle demeanor lies a deep passion for adventure.',
			relationship: 'Acquaintance',
			personality: 'Shy',
			slug: 'aria-winter',
		},
		{
			name: 'Luna Ashford',
			age: 31,
			avatar:
				'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/HXeyDX-YF42EoBSl2SLkXgYZf9OHiO4VK4I5IesLaS8/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS8xMzdjOTEwMmFl/M2Y3OTY1ODk3ZGI5/MmVlODFiOTkzMi5w/bmc.png',
			about:
				"Luna is unpredictable—one moment she's teasing you with her wit, the next she's pulling you into a whirlwind of excitement. With an alluring smirk and a fearless attitude, she’s the ultimate wildcard.",
			relationship: 'Friend',
			personality: 'Playful',
			slug: 'luna-ashford',
		},
		{
			name: 'Seraphina Monroe',
			age: 35,
			avatar:
				'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/rn5hNR0APEy_ty8T0IL_2m1-qqlTnPzYRp_geiX03ys/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS8xMmJhMWE2MTUy/NDcxZjA2MzkxZmIw/NGVlODBlN2U2MS5w/bmc.png',
			about:
				'Seraphina is elegance personified. She carries herself with grace, always composed yet effortlessly seductive. She prefers deep conversations over small talk and sees beauty in every moment.',
			relationship: 'CloseFriend',
			personality: 'Mysterious',
			slug: 'seraphina-monroe',
		},
	]

	return (
		<div>
			<Banner />
			<MaxWidthWrapper>
				<div className="my-4">
					<h1 className="text-2xl sm:text-3xl font-semibold my-6">
						Explore <span className="text-destructive-foreground"> AI Girlfriends </span>- NSFW Chats
					</h1>

					<div className="flex justify-center sm:justify-start gap-4 flex-wrap">
						{modelData.map(model => (
							<ModelCard key={model.slug} model={model} />
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}
