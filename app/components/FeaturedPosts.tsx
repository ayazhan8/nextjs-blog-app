import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleBlogCard } from "@/app/lib/interface";
import { Badge } from "@/components/ui/badge";


export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'blog' && isFeatured == true] {
      title,
      smallDescription,
      titleImage,
      date,
      category->{name},
      "currentSlug": slug.current,
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function FeaturedPosts() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <h2 className="font-bold text-lg sm:text-xl md:text-2xl my-3">Featured Posts</h2>

      <div className="">
        {data.map((post, idx) => (
          <Card key={idx} className="flex mb-8 flex-col md:flex-row">
            
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={512}
              height={384}
              className="object-cover w-full h-auto p-4 max-h-[256px]"
            />

            <CardContent className="p-4">

              <p className="flex items-center">
                {post.date.slice(0, 10)}
                <Badge className="ml-2">{post.category.name}</Badge>
              </p>
              
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
