import { Category } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

async function getCategories() {
  const query = `
      *[_type == 'category'] {
        name
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Categories() {
  const categories: Category[] = await getCategories();

  const colors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // utils/slugify.js
  const slugify = (text: string) => {
    return text
      .toString() // Convert to string
      .toLowerCase() // Convert to lowercase
      .trim() // Remove whitespace from both sides
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };

  return (
    <div className="w-full">
      <div className="mt-8 md:mt-16 max-w-3xl mx-auto">
        <h2 className="font-bold text-2xl my-3 ml-2 text-center">Categories</h2>
        <div className="flex justify-center">
          {categories.map((category, idx) => (
            <Badge
              key={category.name}
              variant="outline"
              className={`${getRandomColor()} mx-2 my-1 px-3 py-2 border-none`}
            >
              <Link
                href={`/categories/${slugify(category.name)}`}
                key={idx}
                className={`font-normal text-sm dark:text-black`}
              >
                {category.name}
              </Link>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
