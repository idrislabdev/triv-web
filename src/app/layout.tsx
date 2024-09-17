import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/components/main-header.css";
import "@/styles/components/footer.css";
import "@/styles/components/swiper.css";
import "@/styles/components/cards.css";
import "@/styles/components/forms.css";
import MainHeader from "@/@core/components/main-header";
import Footer from "@/@core/components/footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
