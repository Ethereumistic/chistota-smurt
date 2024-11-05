import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { NavbarTest3 } from "./components/NavbarTest3";
import Footer2 from "./components/ui/Footer2";
import { CountdownProvider } from "./components/calendar/CountdownProvider";
import ConditionalBuyTicketButton from "./components/ui/ConditionalBuyTicketButton";
import { LoadingManager } from "./components/ui/LoadingManager";



const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});


export const metadata: Metadata = {
  title: "Чистота или Смърт",
  description: "Чистота или Смърт - филм за зависимостта",
  openGraph: {
    title: 'Чистота или Смърт',
    description: 'Чистота или Смърт - филм за зависимостта',
    images: [{
      url: 'https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/preview.png', // Replace with your actual image URL
      width: 1200,
      height: 630,
      alt: 'Чистота или Смърт Preview Image',
    }],
    locale: 'bg_BG',
    type: 'website',
  },
  // Optional: Add Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Чистота или Смърт',
    description: 'Чистота или Смърт - филм за зависимостта',
    images: ['https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/preview.png'], // Replace with your actual image URL
  },
};



export default function RootLayout({
  children,

}: {

  children: React.ReactNode

}) {

  return (
      <html>
      <body
        className={`${montserrat.variable} antialiased`}>
        <CountdownProvider>
        <LoadingManager>
                    <div 
                      className="relative" 
                      style={{ 
                        backgroundImage: 'url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.webp)', 
                        backgroundRepeat: 'repeat', // Set to repeat
                        backgroundSize: 'contain', // Ensure the image is contained
                        minHeight: '100%', // Allow it to grow with content
                        width: '100%' 
                      }}
                    >
            <NavbarTest3 />
            {children}
            <div className="bg-gradient-to-b from-black/0 to-black/[0.5] w-full h-5"></div>
            <ConditionalBuyTicketButton />
            <Footer2 />
          </div>
          </LoadingManager>
          </CountdownProvider>
      </body>
      </html>
  );
}