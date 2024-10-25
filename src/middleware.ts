
import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   console.log("Profile middleware");

//   // Check if the user is authenticated by trying to retrieve a token
//   const isAuth = await getToken({ req: request });

//   console.log("Token status:", isAuth);  // Log token status to check

//   // If the user is authenticated (token exists), allow access to /profile
//   if (isAuth) {
//     return NextResponse.redirect(new URL("/profile",request.url));
//   }

//   // If the user is not authenticated, redirect to the /signin page
//   return NextResponse.redirect(new URL('/auth/signin', request.url));
// }

// // Apply the middleware only to the /profile route
// export const config = {
//   matcher: '/profile/:path*',
// };

//  or we can do it like that 



export default withAuth(async function middleware(request:NextRequest ){
  const pathname=request.nextUrl.pathname;
  const isAuth=await getToken({req:request});
  const protectedRoutes=['profile'];
  const isAuthRoute=pathname.startsWith("/auth");
  const isProtectedRoute=protectedRoutes.some((route)=>{
    pathname.startsWith(route)
  });

if (!isAuth && isProtectedRoute ) {
  return NextResponse.redirect(new URL("/auth/signin",request.url))
}
if (isAuthRoute && isAuth) {
  return NextResponse.redirect(new URL("/",request.url))

}

},
{
  callbacks:{
    async authorized(){
      return true;
    }
  }
})

export const config = {
  matcher: ['/profile/:path*','/auth/:path*']
};