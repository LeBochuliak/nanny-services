import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import Header from "@/components/Header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

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
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
