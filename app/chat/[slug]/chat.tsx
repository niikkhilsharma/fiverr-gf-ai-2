'use client'
import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import ModelPreview from '@/components/model-preview'
import { Button } from '@/components/ui/button'
import { ProfileSearch } from '@/components/profile-search'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PanelLeft } from 'lucide-react'
import ChatBox from './chat-box'
import { Input } from '@/components/ui/input'
import { AIFemaleCharacter } from '@prisma/client'

export default function Chat({ femaleModelData }: { femaleModelData: AIFemaleCharacter }) {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxSteps: 5,
		api: '/api/chat', // Ensure this matches your API route path
	})

	const [showModelPreview, setShowModelPreview] = useState(false)

	return (
		<div className="w-full flex min-h-svh h-full">
			<div className="hidden md:block w-full max-w-80">
				<ProfileSearch />
			</div>
			<div className={'w-full flex flex-col'}>
				<div className="border-b p-4 flex items-center gap-4 w-full bg-background border-r sticky top-[64px] z-10">
					<Avatar>
						<AvatarImage src={femaleModelData.image} />
						<AvatarFallback>{femaleModelData.name?.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<h3 className="text-xl font-bold truncate">{femaleModelData.name}</h3>
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
					<ModelPreview modelData={femaleModelData!} />
				</div>
			)}
		</div>
	)
}
