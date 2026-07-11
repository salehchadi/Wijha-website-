import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import KineticCursor from "@/components/KineticCursor";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-primary",
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: 'swap',
});

export const metadata = {
  title: "Wijha West | Luxury Architectural Real Estate",
  description: "Curating the path of light through premium Egyptian limestone. West Cairo's most exclusive architectural developments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body>
        <KineticCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
