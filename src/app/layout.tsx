import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/components/main-header.css";
import "@/styles/components/footer.css";
import "@/styles/home.css"
import MainHeader from "./@core/components/main-header";
import Footer from "./@core/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TRIV - Indonesian Digital Asset &amp; Cryptocurrency Marketplace</title>
        <meta name="description" content="TRIV - Indonesian Digital Asset & Cryptocurrency Marketplace" />
      </head>
      <body>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
