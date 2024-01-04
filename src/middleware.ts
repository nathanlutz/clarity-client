import { authMiddleware, redirectToSignIn }    from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/dashboard"],
  authorizedParties: [
    "http://localhost:3000",
    "https://clarity-client-nathanlutzs-projects.vercel.app",
    "https://clarity-client-nathanlutzs-projects.vercel.app/",
    "https://clarity-client-git-master-nathanlutzs-projects.vercel.app",
    "https://clarity-client-git-master-nathanlutzs-projects.vercel.app/",
    "https://clarity-client-2idwcleac-nathanlutzs-projects.vercel.app",
    "https://clarity-client-2idwcleac-nathanlutzs-projects.vercel.app/",
    "https://www.clarity-markets.com/",
    "https://www.clarity-markets.com"
  ],
  afterAuth: (user, req, res) => {
    // If the user is not logged in and trying to access a protected route, don't allow them to access route
    if (!user.userId && !user.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // If the user is logged in and trying to access a protected route, allow them to access route
    if (user.userId && !user.isPublicRoute) {
      return NextResponse.next()
    }
    return NextResponse.next();
  }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };
