import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed");

    const authToken = request.cookies.get("authToken")?.value;

    if(request.nextUrl.pathname === "/api/login"){
        return ; 
    }

    const loggedInUserNotAccessPaths = 
    request.nextUrl.pathname === "/login" || 
    request.nextUrl.pathname == "/signup";

    if(loggedInUserNotAccessPaths){
        //  accessing not secured route
        if(authToken){
            return NextResponse.redirect(new URL("/profile/user", request.url))
        }
    } else{
        //  accessing secured route
        if(!authToken){
            return NextResponse.redirect(new URL("/login", request.url));
        } else{
            // varify token
        }
    }

    console.log(authToken);

//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
  "/",  
  "/login", 
  "/signup", 
  "/add-task",
  "/show-tasks",
  "/profile/:path*",
  "/api/:path*"
],
};