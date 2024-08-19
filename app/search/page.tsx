"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasArticles, setHasArticles] = useState(false);
  const [articles, setArticles] = useState<simpleBlogCard[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const constructQuery = (text: string) => {
    const cleanText = text.replace(/[\\@!#\$%\^]/g, "");
    return `*[_type == 'blog' && title match "*${cleanText}*"] {
    title,
    smallDescription,
    titleImage,
    date,
    category->{name},
    "currentSlug": slug.current,
    }`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchResults = await client.fetch<simpleBlogCard[]>(
      constructQuery(searchQuery)
    );
    setHasArticles(searchResults.length > 0 ? true : false);
    setArticles(searchResults);
  };

  const fetchAllArticles = async () => {
    const data: simpleBlogCard[] = await client.fetch<simpleBlogCard[]>(
      constructQuery(searchQuery)
    );

    setArticles(data);
    setHasArticles(data.length > 0 ? true : false);
  };

  useEffect(() => {
    fetchAllArticles()
      .then(() => setIsLoaded(true))
      .catch(console.error);
  }, []);

  return (
    <div className="mt-4 mx-4 md:mt-12">
      <form
        action="submit"
        className="relative max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          className="w-full h-10 border rounded-full pl-8 text-sm md:pl-4 md:h-12 dark:bg-white dark:opacity-70 dark:text-black"
          placeholder="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

        <Search className="md:hidden opacity-60 absolute left-1 top-1/2 transform -translate-y-1/2 h-4 w-8" />

        <Button
          variant="default"
          size="default"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-[75%] dark:text-white"
        >
          Find
        </Button>
      </form>

      {!hasArticles && isLoaded && (
        <div className="mt-4 md:mt-12 text-lg">
          <p className="text-center">Nothing found.</p>
        </div>
      )}

      {!hasArticles && !isLoaded && (
        <div className="mt-4 md:mt-12 text-lg">
          <p className="text-center">Loading...</p>
        </div>
      )}

      {hasArticles && (
        <div className="mt-12 border-t-[1.5px] pt-4 max-w-2xl mx-auto">
          {articles.map((item, idx) => (
            <div key={item.title} className="pt-2 pb-8 border-b-[1.5px]">
              <div className="text-sm my-4">
                <span className="pr-4">
                  {format(item.date, "MMM dd, yyyy")}
                </span>
                <span className="rounded-full px-2 py-1 bg-primary/75 text-white">
                  {item.category.name}
                </span>
              </div>
              <div className="flex">
                <div className="w-3/4 pr-4">
                  <p className="font-semibold">
                    {item.title.substring(0, 70) +
                      (item.title.length > 70 ? "..." : "")}
                  </p>
                  <p className="text-sm block md:hidden">
                    {item.smallDescription.substring(0, 70) +
                      (item.title.length > 70 ? "..." : "")}
                  </p>
                  <p className="text-sm hidden md:block">
                    {item.smallDescription.substring(0, 200) +
                      (item.title.length > 70 ? "..." : "")}
                  </p>
                </div>
                <div className="w-1/4 flex flex-col justify-between pt-1 items-end">
                  <Image
                    src={urlFor(item.titleImage).url()}
                    alt="image"
                    width={200}
                    height={100}
                    className="w-[80px] h-[60px] object-cover md:w-[150px] md:h-[100px]"
                  />

                  <div className="text-sm text-primary mt-4">
                    <Link
                      href={`/blog/${item.currentSlug}`}
                      className="flex justify-end items-center"
                    >
                      Read
                      <ArrowRight className="w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
