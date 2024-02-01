"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "./SearchButton";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      href: `/home`,
      label: "Home",
      active: pathname === `/home`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
    {
      href: `/categories`,
      label: "Categories",
      active: pathname === `/categories`,
    },
    {
      href: `/contact`,
      label: "Contact",
      active: pathname === `/contact`,
    },
  ];

  return (
    <div className="border-b-2">
      <nav className="w-full relative flex items-center justify-between px-10 py-5 gap-4 max-w-7xl mx-auto">
        <div>
          <Link href="/" className="font-bold text-xl lg:text-3xl">
            Temirlan's <span className="text-primary">Blog</span>
          </Link>
        </div>

        <div className="flex flex-row gap-4 lg:gap-8">
          <div className="hidden sm:flex sm:items-center sm:justify-between lg:gap-8">
            {routes.map((route, idx) => (
              <Link
                key={idx}
                href={route.href}
                className={`px-3 py-2 font-semibold text-sm md:text-base ${
                  route.active ? "text-blue-500" : ""
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <ModeToggle />
            <SearchButton />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setOpen(true);
              }}
              className="sm:hidden"
            >
              <Menu />
            </Button>
          </div>
        </div>

        {open && (
          <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-between items-center p-8 bg-popover">
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => {
                setOpen(false);
              }}
            >
              <X />
            </Button>
            <div className="flex flex-col items-center justify-between">
              {routes.map((route, idx) => (
                <Link
                  key={idx}
                  href={route.href}
                  className={`px-3 py-2 font-semibold ${
                    route.active ? "text-primary" : ""
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <div></div>
          </div>
        )}
      </nav>
    </div>
  );
}
