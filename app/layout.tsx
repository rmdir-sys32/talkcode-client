import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesque = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Slate: AI Coding Interviewer",
  description: "Stop solving in silence. Practice with purpose. Let Slate handle the communication for you.",
  openGraph: {
    title: "Slate: AI Coding Interviewer",
    description: "Stop solving in silence. Practice with purpose. Let Slate handle the communication for you.",
    url: "/",
    siteName: "Slate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slate: AI Coding Interviewer",
    description: "Stop solving in silence. Practice with purpose. Let Slate handle the communication for you.",
    creator: "@slate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
        inter.variable,          // Added this
        spaceGrotesque.variable, // Added this
        "font-sans"              // Changed default to sans
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
