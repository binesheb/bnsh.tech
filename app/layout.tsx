import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNSH — Systems, Ideas, Reality",
  description: "BNSH is a technology, design and experimental systems studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
