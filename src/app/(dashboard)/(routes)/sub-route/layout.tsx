
import React from 'react'

export default function SubRoute({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full relative'>
            {children}
        </div>
    )
}
