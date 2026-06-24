import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yiwei Guo | Cybersecurity & DFIR",
  description:
    "Modern personal portfolio for Yiwei Guo, a Toronto-based cybersecurity and digital forensics professional.",
  openGraph: {
    title: "Yiwei Guo | Cybersecurity & DFIR",
    description:
      "Cybersecurity Professional, DFIR Engagement Lead, and Digital Forensics specialist based in Toronto, Canada.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
