import Banner from '@/components/banner'
import ModelCard from '@/components/model-card'
import prisma from '@/lib/prisma/prisma'

export default async function Home() {
	const model = await prisma.aIFemaleCharacter.findMany()

	return (
		<div className="min-h-svh h-svh pb-20 w-full px-4 sm:px-6 overflow-y-scroll">
			<Banner />
			<div className="my-4">
				<h1 className="text-2xl sm:text-3xl font-semibold my-6">
					Explore <span className="text-destructive-foreground"> AI Girlfriends </span>- NSFW Chats
				</h1>

				<div className="flex justify-center sm:justify-start gap-4 flex-wrap">
					{model.map(model => (
						<ModelCard key={model.id} model={model} />
					))}
				</div>
			</div>
		</div>
	)
}
