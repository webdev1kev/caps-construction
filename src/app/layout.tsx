import type { Metadata } from "next";
import { Caudex } from "next/font/google";
import NavigationBar from "./NavigationBar";
import "./globals.css";
import Footer from "./Footer";

const caudex = Caudex({ weight: ["400", "700"], subsets: ["greek"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Caps Construction",
    default: "Caps Construction",
  },
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
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
