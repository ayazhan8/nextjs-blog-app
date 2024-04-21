import Heading from "@/components/heading";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 text-center flex items-center flex-col md:flex-row md:pt-40">
      <div className="shrink-0">
        <Image
          src="/avatar.jpg"
          alt=""
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-60 w-60 rounded-full border-[0.1rem] border-white object-cover"
        />
      </div>

      <div className="md:ml-20 mt-10 md:mt-0 lg:text-left">
        <Heading>About Me</Heading>
        <p>
          As an accomplished electrical engineer holding both a BSc and MSc, I
          invite you to delve into my blog where I eloquently share my
          experiences as a junior professional and offer a glimpse into my
          tenure at a prestigious corporation. Embark on a journey with me as I
          navigate the intricate realm of engineering, offering valuable
          insights and wisdom along the way.
        </p>

        <div className="mt-20 flex items-center justify-center lg:justify-normal">
          <span className="mr-4">Contact me on:</span>
          <a
            className="bg-white text-gray-700 p-3 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border- border-black/50 dark:bg-white/10 dark:border-none dark:text-white/60 mr-2"
            href="https://www.linkedin.com/in/temirlan-myrzakhmet/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="bg-white text-gray-700 p-3 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/50 dark:bg-white/10 dark:border-none dark:text-white/60"
            href="mailto:XXXXXX@gmail.com"
            target="_blank"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
}
