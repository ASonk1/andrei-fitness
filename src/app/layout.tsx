import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Andrei Stoica Coaching | Personal Trainer Cluj-Napoca";
const description =
  "In-person 1-to-1 personal training with Andrei Stoica at 18Gym in Cluj-Napoca. Personalized coaching focused on strength, technique, consistency, and sustainable progress.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Andrei Stoica" }],
  creator: "Andrei Stoica",
  openGraph: {
    title,
    description,
    siteName: "Andrei Stoica Coaching",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#111311",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
