import React from 'react'
import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <div className={cn('container mx-auto max-w-screen-xl px-4', className)}>{children}</div>
}

export default MaxWidthWrapper
