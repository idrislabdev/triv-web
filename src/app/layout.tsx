import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/components/main-header.css";
import "@/styles/components/footer.css";
import "@/styles/components/swiper.css";
import "@/styles/components/cards.css";
import "@/styles/components/forms.css";
import "@/styles/components/slider-progress.css";
// import "@/styles/components/highcharts.css";


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
