"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="m-auto pt-20 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      <Heading>Contact me</Heading>
      <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:myrza@gmail.com">
          myrza@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        // action={async (formData) => {
        // const { data, error } = await sendEmail(formData);
        // if (error) {
        //   toast.error(error);
        //   return;
        // }
        // toast.success("Email sent successfully!");
        // }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="email"
          required
          maxLength={500}
          className="h-14 rounded-lg border border-black/10  p-4 outline-black dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-90 transition-all dark:outline-none"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg border border-black/10 p-4 outline-black dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-90 transition-all dark:outline-none"
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="w-28 text-white">
          Submit <Send className="w-4 ml-2 opacity-70" />
        </Button>
      </form>
    </div>
  );
}
