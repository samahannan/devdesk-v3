import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";

const copy = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  // icons: [
  //   {
  //     url: "/logo.png",
  //     href: "/logo.png",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={copy.className}>{children}</body>
    </html>
  );
}
