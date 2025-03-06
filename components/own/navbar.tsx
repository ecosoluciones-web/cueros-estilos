import { SearchIcon, ShoppingCart } from "lucide-react";
import Link from "next/link"
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 w-full border-b bg-none backdrop-blur supports-[backdrop-filter]:bg-white">
            <div className="container flex h-16 items-center justify-between font-montserrat">
                <nav className="hidden md:flex gap-6">
                    <Link href="#" className="text-lg">
                        Hombre
                    </Link>
                    <Link href="#" className="text-lg font-montserrat">
                        Mujer
                    </Link>
                    <Link href="#" className="text-lg font-montserrat">
                        Accesorios
                    </Link>
                </nav>
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-3xl">CUEROS Y ESTILOS</span>
                </Link>
                <div className="flex items-center gap-14">
                    <Button variant="ghost" size="lg">
                        <SearchIcon className="h-16 w-16" />
                    </Button>
                    <Button variant="ghost" size="lg">
                        <ShoppingCart className="h-16 w-16" />
                    </Button>
                </div>
            </div>
        </div>
    )
}