"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchButton from "./SearchButton";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { client } from "../lib/sanity";
import { fullBlog } from "../lib/interface";
import { groq } from "next-sanity";
import axios from "axios";

export default function Navbar() {
  const router = useRouter();
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
    {
      href: `/contact`,
      label: "Contact",
      active: pathname === `/contact`,
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
    console.log(searchResults);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

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
            {!isSearching && <ModeToggle />}

            <form
              action="submit"
              className="relative w-max mx-auto"
              onClick={() => {
                setSearching(true);
              }}
              ref={divRef}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name=""
                id=""
                onChange={handleChange}
                className="relative peer z-10 bg-transparent w-12 h-12 focus:rounded-full focus:border 
                            focus:w-full focus:border-blue-300 cursor-pointer outline-none focus:cursor-text
                            pl-8 "
              />
              <Search className="absolute inset-y-0 right-0 my-auto h-8 w-12 px-3.5 border-l border-transparent peer-focus:border-blue-300 peer-focus:stroke-blue-300" />
            </form>

            {!isSearching && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setOpen(true);
                }}
                className="sm:hidden"
              >
                <Menu />
              </Button>
            )}
          </div>
        </div>

        {open && (
          <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-between items-center py-5 px-11 bg-popover">
            <Button
              variant="ghost"
              size="icon"
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
                  onClick={() => setOpen(false)}
                  href={route.href}
                  className={`my-3 font-semibold text-2xl
                  ${route.active ? "text-primary" : ""}
                  `}
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
