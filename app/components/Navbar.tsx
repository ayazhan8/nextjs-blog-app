"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useModalsContext } from "@/context/modals-context";

export default function Navbar() {
  const { activeModal, setActiveModal } = useModalsContext();

  const [open, setOpen] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
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
  ];

  const divRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setSearching(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchFilter = `&& name match "${searchText}"`;

    // const searchResults = await client.fetch<fullBlog[]>(
    //   groq`*[_type == "blog"] {
    //     title
    //   }`
    // );
    const searchResults = await axios.get(`/api/search?filter=${searchText}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="border-b-2">
      <nav className="w-full relative flex items-center justify-between px-10 py-5 gap-4 max-w-7xl mx-auto">
        <div>
          <Link href="/" className="font-bold text-xl lg:text-3xl">
            Temirlan&apos;s <span className="text-primary">Blog</span>
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
            <Link href={"/search"}>
              <Search className="h-8 w-12 px-3.5" />
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => {
                setActiveModal("mobive-nav");
              }}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
