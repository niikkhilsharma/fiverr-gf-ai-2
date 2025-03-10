import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Banner = () => {
	return (
		<div className="lg:px-6  lg:mt-6 relative">
			<Link className="absolute inset-0 z-20" href="/create-ai-girl" />
			<div className="relative bg-[url(https://fantasygf.ai/hero-pattern-bg.svg)] bg-cover bg-[center] lg:rounded-3xl">
				<Image
					alt="Hero pattern background"
					loading="lazy"
					className="object-cover lg:rounded-3xl"
					style={{
						position: 'absolute',
						height: '100%',
						width: '100%',
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						color: 'transparent',
					}}
					sizes="100vw"
					width={1456}
					height={816}
					src="https://fantasygf.ai/valentine/hero-2.webp"
				/>
				<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/90 backdrop-blur-[2px] lg:rounded-3xl lg:shadow-xl" />
				<div className="flex flex-row items-center justify-between w-full bg-cover bg-center text-white h-[145px] lg:h-[200px] xl:h-[250px]">
					<div className="relative flex-1 self-end h-full">
						<div className="flex-1 h-full">
							<div
								className="relative flex items-end lg:scale-110 lg:-translate-y-[5%] -ml-4 lg:ml-[55px] h-full scale-90 translate-y-[5%]"
								data-sentry-component="HeroAvatars"
								data-sentry-source-file="hero-avatars.jsx">
								<Image
									width={377}
									height={441}
									src="https://fantasygf.ai/banner/realistic/female/left.webp"
									alt="Anime AI Girl Avatar"
									className="-mr-[64px] lg:-mr-[80px] object-contain object-left w-auto h-full"
								/>
								<Image
									width={461}
									height={542}
									src="https://fantasygf.ai/banner/realistic/female/center.webp"
									alt="Anime AI Girl Avatar"
									className="-mr-[60px] lg:-mr-[70px] object-contain z-10 object-left w-auto h-full"
								/>
								<Image
									width={489}
									height={510}
									src="https://fantasygf.ai/banner/realistic/female/right.webp"
									alt="Anime AI Girl Avatar"
									className="-mr-[60px] lg:-mr-[100px] object-contain object-left w-auto h-full"
								/>
							</div>
						</div>
					</div>
					<div className="z-10 relative py-5 px-5 xl:pr-8 max-w-[60%] lg:max-w-[360px] xl:max-w-[700px] md:flex md:flex-col xl:items-end">
						<div className="text-right md:text-left w-full max-w-lg xl:text-right">
							<h1 className="text-xl md:text-2xl font-bold xl:text-4xl">
								Create your own{/* */} <span className="text-brand-300 whitespace-nowrap">AI {/* */}Girlfriend</span>
							</h1>
						</div>
						<div className="mt-1 lg:mt-2 xl:mt-4 flex flex-col items-end md:items-start lg:gap-2 xl:flex-row xl:items-center md:mt-6">
							<h2 className="leading-relaxed mt-2 opacity-80 hidden lg:block text-xs max-w-[330px] xl:max-w-[400px] xl:text-sm xl:text-right xl:border-r border-white/50 xl:pr-4 font-medium">
								Your dream AI Companion is waiting for you! Create your AI Girlfriend, change her looks, personality and bring her to
								life now!
								<span className="whitespace-nowrap"> AI NSFW Chat &amp; Image.</span>
							</h2>
							<Button className="bg-destructive-foreground rounded-xl sm:py-6 sm:text-base text-foreground">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									color="currentColor"
									className="w-5 h-5 mr-2"
									data-sentry-element="MagicWand03Icon"
									data-sentry-source-file="hero-create-ai.tsx">
									<path
										d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z"
										fill="currentColor"
										fillRule="evenodd"
									/>
									<path
										d="M16.4088 16.4088C17.2872 15.5304 18.7113 15.5304 19.5897 16.4088L21.5912 18.4103C22.4696 19.2887 22.4696 20.7128 21.5912 21.5912C20.7128 22.4696 19.2887 22.4696 18.4103 21.5912L16.4088 19.5897C15.5304 18.7113 15.5304 17.2872 16.4088 16.4088Z"
										fill="currentColor"
									/>
									<path
										d="M13.398 1.9444C14.1704 2.34345 14.4782 3.21031 14.4791 4.11573L14.4791 4.11691L14.4898 6.7306C14.4854 6.85787 14.5465 7.1563 14.8264 7.33182L16.8227 8.58339C17.6666 9.11338 18.3782 9.89669 18.2334 10.8453C18.088 11.7978 17.1701 12.3266 16.2069 12.5708L13.6989 13.2041C13.3859 13.2831 13.2372 13.5703 13.202 13.7041L12.57 16.208C12.3275 17.1728 11.7967 18.0864 10.8442 18.2315C9.89631 18.3759 9.11178 17.6686 8.58246 16.8238L7.33148 14.8278C7.16078 14.5554 6.85974 14.4899 6.73056 14.4912L4.1148 14.4804C3.2123 14.4767 2.34719 14.1684 1.9477 13.3984C1.54687 12.6259 1.79782 11.742 2.32175 11.0063L3.71538 9.05138C3.88322 8.81595 3.84237 8.53762 3.80096 8.42788L2.86132 5.63902L2.86083 5.63754C2.56974 4.76761 2.56961 3.82402 3.19631 3.1972C3.82386 2.56953 4.76774 2.57223 5.63554 2.86655L8.42819 3.80784C8.541 3.84445 8.82319 3.87732 9.0495 3.71593L11.0055 2.32093C11.7405 1.79736 12.6248 1.54491 13.398 1.9444Z"
										fill="currentColor"
									/>
								</svg>
								Create your AI
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
