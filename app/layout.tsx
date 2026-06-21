import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import Header from "@/components/Header/Header";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nannies Services",
  description: "Make Life Easier for the Family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={arimo.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
