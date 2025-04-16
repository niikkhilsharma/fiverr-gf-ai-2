'use client'

import { useState, useEffect, useRef } from 'react'
import FemalemodelData from '@/utils/data/models'
import { useChat } from '@ai-sdk/react'
import { useRouter } from 'next/navigation'
import ModelPreview from '@/components/model-preview'
import { Button } from '@/components/ui/button'
import { ProfileSearch } from '@/components/profile-search'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PanelLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import ChatBox from './chat-box'
import { Input } from '@/components/ui/input'

export default function Chat({ modelSlug }: { modelSlug: string }) {
	const { messages, input, handleInputChange, handleSubmit, status } = useChat({
		maxSteps: 5,
		api: '/api/chat', // Ensure this matches your API route path
	})

	const router = useRouter()
	const [showModelPreview, setShowModelPreview] = useState(false)
	const modelData = FemalemodelData.find(model => model.slug === modelSlug)!

	// Redirect if model not found
	useEffect(() => {
		if (!modelSlug) router.push('/')
		if (!modelData) router.push('/')
	}, [modelData, router])

	return (
		<div className="w-full flex min-h-svh h-full">
			<div className="hidden md:block w-full max-w-80">
				<ProfileSearch />
			</div>
			<div className={'w-full flex flex-col'}>
				<div className="border-b p-4 flex items-center gap-4 w-full bg-background border-r sticky top-[64px] z-10">
					<Avatar>
						<AvatarImage src={modelData.avatar} />
						<AvatarFallback>{modelData.name?.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<h3 className="text-xl font-bold truncate">{modelData.name}</h3>
					<Button
						size={'icon'}
						variant={'outline'}
						className="ml-auto rounded-full hover:cursor-pointer"
						onClick={() => {
							setShowModelPreview(prev => !prev)
						}}>
						<PanelLeft />
					</Button>
				</div>

				<ChatBox handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} messages={messages} />
				<form
					onSubmit={handleSubmit}
					className="flex justify-center items-center sticky bottom-4 w-[calc(100%-2rem)] mx-auto bg-background rounded-[var(--radius)]">
					<Input
						value={input}
						placeholder="Say something like: generate an image of a futuristic city..."
						onChange={handleInputChange}
					/>
				</form>
			</div>

			{showModelPreview && (
				<div className="w-full max-w-80 border-l">
					<ModelPreview modelData={modelData!} />
				</div>
			)}
		</div>
	)
}
