import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token: any = request.cookies.get('token')
    console.log(token);
    if (token) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*', '/about/:path*', '/sub-route/:path*'],
}