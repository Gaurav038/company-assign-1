import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup'

  const token = request.cookies.get('token')?.value || ''
  
  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if (path != '/' && !isPublicPath && !token) {
    const redirectUrl = new URL('/login', request.nextUrl);
    redirectUrl.searchParams.set('redirectTo', path);
    return NextResponse.redirect(redirectUrl)
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/about/:path*',
    '/post/:id*'
  ]
}