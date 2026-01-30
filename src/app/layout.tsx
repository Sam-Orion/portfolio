import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter and Outfit
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Misra | SWE, AI & ML Engineer",
  description: "Portfolio of Shubham Misra, a Software Engineer and AI/ML Specialist based in India.",
  icons: {
    icon: "/favicon.ico", // Ensure we have a favicon later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
