import { Input } from './ui/input'

export function ProfileSearch() {
	return (
		<div className="w-full h-full border-r">
			<div className="space-y-2 sticky top-0 p-4">
				<Input
					className="bg-secondary-foreground/10 border-none rounded-full backdrop-blur-2xl py-2 px-4"
					placeholder={'Search for a profile...'}
				/>
			</div>
		</div>
	)
}
