import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';


export default function middleware(req) {
  const getToken = Cookies.get("jwt")
  const loggedin = getToken
  const { pathname } = req.nextUrl;
  // console.log(pathname)


  if (loggedin && pathname === '/login' || pathname === '/sign-up') {
    console.log("login page")
    return NextResponse.redirect(new URL('/profile', req.url));
  }


  if (!loggedin && pathname !== '/login' && pathname !== '/sign-up') {
    console.log("not login")
    return NextResponse.redirect(new URL('/', req.url));
  }
}


export const config = {
  matcher: ['/profile', "/create-blog", "/login", "/sign-up"]
};


