'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { cn } from '@/lib/utils';
import { LayoutDashboard, RouteOffIcon, User2Icon } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';

const montserrat = Montserrat({ weight: "800", subsets: ['latin'], })

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        herf: "/dashboard",
        color: "text-sky-500"
    }, {
        label: "About",
        icon: User2Icon,
        herf: "/about",
        color: "text-violet-500"
    }, {
        label: "Sub Routes",
        icon: RouteOffIcon,
        herf: "/sub-route",
        color: "text-blue-500"
    }
]

export default function SideBar() {
    const pathname = usePathname().match(/\/[^/]+/)?.[0] || null;
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className='px-3 py-2 flex-1'>
                <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                    <div className='relative w-8 h-8 mr-4'>
                        <Image
                            fill
                            alt='Logo'
                            src="/logo.png"
                        />
                    </div>
                    <div className={cn("text-2xl font-bold text-white", montserrat.className)}>
                        Demo Web
                    </div>
                </Link>
                {pathname}
                <div className='space-y-1'>
                    {routes.map((route) => (
                        <Link href={route.herf} key={route.herf} className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathname === route.herf ? "text-white bg-white/10" : "text-zinc-400")}>
                            <div className='flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />{route.label}
                            </div>
                        </Link>))}
                </div>
            </div >
        </div >
    )
}
