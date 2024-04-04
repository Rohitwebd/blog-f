import { NextResponse } from 'next/server'


export function middleware(request) {

    const user = false
    console.log("middleware work")
    if (!user) {
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }
}


export const config = {
    matcher: [
        '/profile',
        '/edit-profile',
        '/create-password'
    ]
}