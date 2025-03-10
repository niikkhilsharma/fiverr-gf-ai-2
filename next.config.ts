import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fantasyimg.com',
				port: '',
				pathname: '/**',
			},
			{ protocol: 'https', hostname: 'fantasyimg.ai', port: '', pathname: '/**' },
			{ protocol: 'https', hostname: 'fantasygf.ai', port: '', pathname: '/**' },
		],
	},
}

export default nextConfig
