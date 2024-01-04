import { authMiddleware }    from "@clerk/nextjs";

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
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };
