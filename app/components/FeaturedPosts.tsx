import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client, urlFor } from '@/app/lib/sanity';
import { simpleBlogCard } from '@/app/lib/interface';

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
      <h2 className="font-bold text-2xl my-3">Featured Posts</h2>

      <div className="">
        {data.map((post, idx) => (
          <Card key={idx} className="flex my-8 flex-col md:flex-row">
            <Image 
              src={urlFor(post.titleImage).url()} 
              alt="image" 
              width={400} 
              height={300}
              className="rounded-s-lg h-70 object-cover"
              />
            <CardContent className="mt-5">
              <span>{post.date.slice(0, 10)} - {post.category.name} </span>
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
              <Button asChild className="mt-7">
                <Link href={`/blog/${post.currentSlug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}