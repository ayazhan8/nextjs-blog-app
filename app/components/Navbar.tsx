"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "./SearchButton";


export default function Navbar() {
    const pathname = usePathname();

    const routes = [
        {
            href: `/home`,
            label: 'Home',
            active: pathname === `/home`
        },
        {
            href: `/about`,
            label: 'About',
            active: pathname === `/about`
        },
        {
            href: `/categories`,
            label: 'Categories',
            active: pathname === `/categories`
        },
        {
            href: `/contact`,
            label: 'Contact',
            active: pathname === `/contact`
        },
    ];

    return (
        <nav className="w-full relative flex items-center justify-between px-10 py-5 border-b-2">
            <div>
                <Link href="/" className="font-bold text-3xl">
                    Temirlan's <span className="text-primary">Blog</span>
                </Link>
            </div>

            <div className="flex items-center justify-between gap-16">
                {routes.map((route) => 
                    <Link 
                        href={route.href} 
                        className={(`px-3 py-2 font-semibold ${route.active ? 'text-primary' : ''}`)}>
                        {route.label}
                    </Link>    
                )}

                <ModeToggle />
                
                <SearchButton />
            </div>
        </nav>
    )
}