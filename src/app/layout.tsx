import type { Metadata } from "next";
import { Caudex } from "next/font/google";
import Navigation from "./Navigation";
import "./globals.css";

const caudex = Caudex({ weight: ["400", "700"], subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caudex.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
