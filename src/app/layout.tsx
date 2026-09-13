import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raznet Solutions — Local-first AI coding agents & software",
  description:
    "Raznet Solutions builds RazCode, terminal AI coding agents, and production software. Local-first, tool-using, unrestricted when you need it.",
  keywords: ["RazCode", "AI coding agent", "Ollama", "local LLM", "Raznet Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <ChatBot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
