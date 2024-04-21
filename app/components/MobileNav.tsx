"use client";
import { Button } from "@/components/ui/button";
import { useModalsContext } from "@/context/modals-context";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function MobileNav() {
  const pathname = usePathname();
  const { setActiveModal } = useModalsContext();

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
    // {
    //   href: `/contact`,
    //   label: "Contact",
    //   active: pathname === `/contact`,
    // },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="fixed overflow-hidden fixed top-0 left-0 w-full h-full flex flex-col justify-between items-center py-5 px-11 bg-popover">
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto"
        onClick={() => {
          setActiveModal("none");
          document.body.style.overflow = "auto";
        }}
      >
        <X />
      </Button>
      <div className="flex flex-col items-center justify-between">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            onClick={() => {
              setActiveModal("none");
              document.body.style.overflow = "auto";
            }}
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
  );
}

export default MobileNav;
