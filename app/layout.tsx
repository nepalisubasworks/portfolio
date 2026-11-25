import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";

// Inter, weights 100–900 (variable font covers the full range)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subas Nepali | Full-Stack Web Developer",
  description:
    "Portfolio of Subas Nepali — building modern web applications, scalable APIs & enterprise systems with Next.js, TypeScript and GraphQL.",
  metadataBase: new URL("https://subasnepali.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#0D0D1F] antialiased`}>
        {children}
      </body>
    </html>
  );
}
