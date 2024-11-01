import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { NavbarTest3 } from "./components/NavbarTest3";
import Footer2 from "./components/ui/Footer2";
import { CountdownProvider } from "./components/calendar/CountdownProvider";
import ConditionalBuyTicketButton from "./components/ui/ConditionalBuyTicketButton";
import { LoadingManager } from "./components/ui/LoadingManager";
import ScrollTracker from "./components/cover/ScrollTracker";



const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});


export const metadata: Metadata = {
  title: "Чистота или Смърт",
  description: "Чистота или Смърт - филм за зависимостта",
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
            <ScrollTracker />
            <Footer2 />
          </div>
          </LoadingManager>
          </CountdownProvider>
      </body>
      </html>
  );
}