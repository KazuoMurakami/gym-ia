import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /api/endpoint)
  const path = request.nextUrl.pathname

  // Check if the path starts with /api
  if (path.startsWith('/api')) {
    // Get the token from the headers
    const token = request.headers.get('authorization')

    // Check if token exists and is valid
    // You should implement your own token validation logic here
    if (!token) {
      // Return 401 if not authenticated
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 },
      )
    }
  }

  // Continue with the request if not accessing /api or if authenticated
  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/api/:path*',
}
