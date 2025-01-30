import "./globals.css";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";

const font = Arimo({ subsets: ["latin"] });

const title = "Bondarenko Oleg CV";

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    url: "monokarp.github.io",
    description: "A brief summary of my professional career in SE.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
