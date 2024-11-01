import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import Script from "next/script";
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

        {/* <Providers> */}
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
          {/* </Providers> */}
          
          <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1969169503524104');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=1969169503524104&ev=PageView&noscript=1`}
        />
      </noscript>

      </body>
      </html>
  );
}