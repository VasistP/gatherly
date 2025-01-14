import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
// import { ModeToggle } from "@/components/mode-toggle";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gatherly",
  description: "A place online to call home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn (
          font.className,
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // forcedTheme="dark"
            enableSystem={false}
            storageKey="gatherly-theme"
          >
            {/* {children} */}
          {/* <ModeToggle /> */}
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <main>{children}</main>

            </SignedIn>
            
          </header>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
