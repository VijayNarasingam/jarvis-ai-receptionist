import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Placeholder middleware — allows all requests to pass through
  // Add your auth, logging, or redirect logic here as needed
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
