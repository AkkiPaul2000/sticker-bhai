import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Navbar1 from "@/components/Navbar1";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StickerBhai",
  description: "Sticker Details",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto"><Navbar1/></div>
          
        <div className="mx-auto flex flex-col max-w-10xl text-2xl gap-2">
        
        {children}</div>
          </ThemeProvider>
        </body>
    </html>
  );
}
