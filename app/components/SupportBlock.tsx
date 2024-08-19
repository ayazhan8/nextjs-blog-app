import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SupportBlock() {
  return (
    <div className="border-2 rounded-lg my-20 p-6 flex flex-col items-center justify-center gap-4">
      <span className="text-base text-center">
        Enjoying the content? Help me stay caffeinated and creative by buying me
        a coffee!
      </span>
      <Link href="https://buymeacoffee.com/temirlanmyrzakhmet">
        <Button
          variant="outline"
          className="text-black flex gap-2 bg-[#FFDD00] "
        >
          <Coffee />
          Buy me a Coffee
        </Button>
      </Link>
    </div>
  );
}
