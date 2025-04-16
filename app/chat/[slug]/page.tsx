import React, { Suspense } from 'react'
import Chat from './chat'

const ChatPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Chat modelSlug={slug} />
		</Suspense>
	)
}

export default ChatPage
