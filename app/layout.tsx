import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whilzpro — Photography for People, Brands and Places",
  description:
    "Whilzpro is a photography and visual storytelling practice based in Lagos, Nigeria, working across fashion, portraits, commercial imagery and places.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}