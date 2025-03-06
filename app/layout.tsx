import type { Metadata } from "next";
import { Afacad, Inter } from 'next/font/google'
import "./globals.css";

// const montserrat = Montserrat({ 
//   subsets: ["latin"],
//   variable: '--font-montserrat',
// });
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const afacad = Afacad({ 
  subsets: ["latin"],
  variable: '--font-afacad',
})

export const metadata: Metadata = {
  title: "Cueros y estilos",
  description: "Tu tienda de moda favorita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${afacad.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
