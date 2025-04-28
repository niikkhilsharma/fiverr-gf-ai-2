import { auth } from '@/auth'
import { RegistrationForm } from '@/components/registration-form'

export default async function Profile() {
	const session = await auth()
	const user = session?.user

	if (!user) {
		return <div>User not found</div>
	}

	return (
		<div className="container mx-auto flex flex-col items-center justify-center py-20 px-4">
			<div className="mx-auto w-full max-w-3xl space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Create an account</h1>
					<p className="text-gray-500 dark:text-gray-400">Fill in the form below to create your account</p>
				</div>
				<RegistrationForm firstName={user.firstName} lastName={user.lastName} email={user.email} />
			</div>
		</div>
	)
}
