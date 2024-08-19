import React from "react";
import Posts from "../components/Posts";

const Category = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // utils/deslugify.js
  function deslugify(slug: string) {
    return slug
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  }

  return (
    <div className="">
      <Posts category={deslugify(params.slug)} page={"1"} perPage={"2"} />
    </div>
  );
};

export default Category;
