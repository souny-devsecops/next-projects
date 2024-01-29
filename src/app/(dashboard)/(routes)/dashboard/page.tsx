import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Dashborad() {
    return (
        <div className='mb-8 space-y-4'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>
                Dashborad
            </h1>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>

    )
}
