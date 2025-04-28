import React, { Suspense } from 'react'
import Chat from './chat'
import prisma from '@/lib/prisma/prisma'

const ChatPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const femaleModelData = await prisma.aIFemaleCharacter.findUnique({ where: { id: Number(slug) } })

	if (!femaleModelData) return <div>Model not found</div>

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Chat femaleModelData={femaleModelData} />
		</Suspense>
	)
}

export default ChatPage
