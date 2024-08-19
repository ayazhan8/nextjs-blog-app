import { Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#ededed] dark:bg-[#26344d] py-10 px-8">
      {/* <p className="flex items-center justify-center mb-6 text-sm font-extralight text-center"></p> */}

      <div className="flex justify-center items-center">
        <a
          className="text-gray-700 flex items-center focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:text-white/60"
          href="https://www.linkedin.com/in/temirlan-myrzakhmet/"
          target="_blank"
        >
          <Linkedin className="w-5" />
        </a>
        <span className="mx-2 opacity-50 mt-1">|</span>
        <a
          className="text-gray-700 flex items-center focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:text-white/60"
          href="mailto:XXXXXX@gmail.com"
          target="_blank"
        >
          <Mail className="w-5 mt-1" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
