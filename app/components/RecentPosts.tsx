import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PaginationControls from "./PaginationControls";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'blog'] {
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

export default async function RecentPosts({
  page,
  perPage,
}: {
  page: string | string[];
  perPage: string | string[];
}) {
  const data: simpleBlogCard[] = await getData();
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const entries = data.slice(start, end);

  return (
    <>
      <h2 className="font-bold text-2xl my-3">Recent Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {entries.map((post, idx) => (
          <Card key={idx} className="flex flex-col my-8">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={400}
              height={300}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <CardContent className="mt-5">
              <span>
                {post.date.slice(0, 10)} - {post.category?.name}{" "}
              </span>
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
      <PaginationControls 
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        itemsCount={data.length}
        />
    </>
  );
}
