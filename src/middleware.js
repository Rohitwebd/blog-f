import { NextResponse } from 'next/server';


export default function middleware(req) {
const loggedin = false
 const { pathname } = req.nextUrl;

// console.log(pathname)

 if (loggedin && pathname === '/login' || pathname === '/signup') {
   console.log("login page")
   return NextResponse.redirect(new URL('/profile', req.url));
 }


 if (!loggedin && pathname !== '/login' && pathname !== '/signup') {
   console.log("not login")
   return NextResponse.redirect(new URL('/', req.url));
 }
}


export const config = {
 matcher: ['/login','/signup' ,'/change-password']
};
