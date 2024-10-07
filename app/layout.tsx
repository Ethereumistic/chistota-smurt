import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarDemo } from "./components/NavbarDemo";
import { languages } from '../i18n/settings'
import DotEffect from "./components/ui/DotEffect";
import Footer from "./components/ui/Footer";
import { Russo_One } from "next/font/google";
import { Montserrat } from "next/font/google";
import { NavbarTest } from "./components/NavbarTest";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});


const russo = Russo_One({
  subsets: ['latin', 'cyrillic'],
  variable: "--font-russo",
  weight: ["400"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function isRTL(lang: string) {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur']; // Add other RTL languages as needed
  return rtlLanguages.includes(lang);
}

export const metadata: Metadata = {
  title: "Чистота или Смърт",
  description: "Чистота или Смърт - филм за зависимостта",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode
  params: {
    lng: string
  }
}) {

  return (
    // <html lang={lng} dir={isRTL(lng) ? 'rtl' : 'ltr'}>
      <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russo.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <div className="bg-dblue text-cream">
            {/* <NavbarDemo /> */}
            <NavbarTest />
            {children}
            <DotEffect dotSize={1} spacing={20}  />
            <Footer />
          </div>
        </Providers>
      </body>
      </html>
  );
}