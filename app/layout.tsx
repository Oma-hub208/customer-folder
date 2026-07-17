import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWÍN",
  description: "Digital credit management platform for traders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}