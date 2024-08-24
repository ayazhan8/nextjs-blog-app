import Heading from "@/components/heading";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 text-center flex items-center flex-col md:pt-30">
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

      <div className="md:mx-20 mt-10 md:mt-0 lg:text-left">
        <Heading>About Me</Heading>
        <p>
          My name is Temirlan Myrzakhmet. I was born and raised in Almaty,
          Kazakhstan. <br />
          <br />
          At the age of 18, I moved to the United Kingdom to pursue education
          and a career in engineering. I chose electrical and electronic
          engineering because the knowledge and skills acquired studying this
          subject can be applied across diverse sectors and industries,
          including energy, utilities, construction, manufacturing,
          transportation, and more. <br />
          <br />I graduated from the University of Manchester with a BEng
          (Honours) degree in Electrical & Electronic Engineering and from
          Imperial College London with an MSc degree in Future Power Networks.
        </p>

        <div className="flex mt-4">
          <Image
            src="/uom_logo.jpeg"
            alt=""
            width="100"
            height="60"
            quality="95"
            priority={true}
            className="mr-6"
          />
          <Image
            src="/imperial_logo.svg"
            alt=""
            width="100"
            height="60"
            quality="95"
            priority={true}
            className=""
          />
        </div>

        <section>
          <h2 className="text-lg font-semibold pt-6 pb-3">
            Career Highlights:
          </h2>
          <div>
            <li>2020 - 2022: BP - Graduate Electrical Engineer</li>
            <li>2023 - Present: National Grid - Power System Engineer</li>
          </div>

          <div className="flex mt-4">
            <Image
              src="/bp_logo.jpeg"
              alt=""
              width="80"
              height="80"
              quality="95"
              priority={true}
              className="mr-6"
            />
            <Image
              src="/ng_logo.jpeg"
              alt=""
              width="300"
              height="40"
              quality="95"
              priority={true}
              className=""
            />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold pt-6 pb-3">
            Getting to know blog’s content and its audience
          </h2>
          <p>
            Our world is beautiful and full of wonders. It has the power to
            inspire extraordinary inventions, move people to create exquisite
            art and poetry, and simply evoke feelings of appreciation for the
            opportunity to experience it.
            <br />
            <br />
            However, the environment of our planet has been adversely affected
            primarily by human activities in the past and present. These
            negative changes destroy ecosystems, biodiversity, livelihoods, and
            sometimes even people’s lives.
            <br />
            <br />
            This blog is a place where you can learn about climate change, and
            what solutions are available in order to tackle this very important
            problem. Furthermore, I will be sharing knowledge about electrical
            engineering, sustainable technologies / solutions, electrical
            systems and renewable energy systems.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold pt-6 pb-3">Mission</h2>
          <p>
            I hope that after reading a single post or exploring the entire
            blog, you will be able to say, 'I've learned something new,' 'I now
            have a better understanding of the issue,' 'This post has clarified
            my misconceptions,' or 'I liked it and want to delve deeper into a
            specific topic.' On the other had, if there is anything I may have
            overlooked, explained inadequately, or made a mistake in, I welcome
            your feedback, ideas, or criticism.
            <br />
            <br />
            Moreover, I believe that raising awareness, offering reminders, and
            sharing knowledge are beneficial actions that can have a positive
            impact on the world around us.
          </p>
        </section>

        <div className="mt-10 flex items-center justify-center lg:justify-normal">
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
