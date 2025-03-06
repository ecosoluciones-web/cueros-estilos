import Navbar from "@/components/own/navbar";

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
          <body className="min-h-screen">
            <Navbar/>
            <div className="container m-auto flex justify-center items-center h-full pt-10">
                { children }
            </div>
          </body>
        </html>
      );
}