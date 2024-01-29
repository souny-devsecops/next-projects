import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function SubRoute() {
    return (
        <div className='flex flex-col'>
            <h1>
                SubRoute
            </h1>
            <Link href="/sub-route/sub-1" className='flex items-center pl-3 mb-14'>
                <div className={cn("text-xxl font-bold")}>
                    Go to Sub Route 1
                </div>
            </Link>
            <Link href="/sub-route/sub-2" className='flex items-center pl-3 mb-14'>
                <div className={cn("text-xxl font-bold")}>
                    Go to Sub Route 2
                </div>
            </Link>
        </div>
    )
}
