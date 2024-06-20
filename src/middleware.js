import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';

export default function middleware(req) {
  try {
    // Attempt to get the JWT token from the cookie
    const getToken = req.cookies.has("jwt");
    console.log("middleware T", getToken);

    // Check if token exists and is not empty
    const loggedin = !!getToken;

    // Use req.url instead of req.nextUrl.pathname
    const { pathname } = req.url;

    if (loggedin && (pathname === '/login' || pathname === '/sign-up')) {
      console.log("Already logged in, redirecting to profile");
      return NextResponse.redirect(new URL('/profile', req.url));
    }

    if (!loggedin && pathname !== '/login' && pathname !== '/sign-up') {
      console.log("Not logged in, redirecting to homepage");
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } catch (error) {
    console.error("Error while processing middleware:", error);
    // Handle the error appropriately, e.g., redirect to an error page
    return NextResponse.error();
  }
}

export const config = {
  matcher: ['/profile','/create-blog','/my-blog','/edit-profile','/edit-blog']
};
