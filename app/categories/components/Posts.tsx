import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import PaginationControls from "@/app/components/PaginationControls";

export const revalidate = 30;

async function getPostsByCategory(category: string) {
  const query = `
    *[_type == 'blog' && category->name == "${category}"] {
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

export default async function Posts({
  category,
  page,
  perPage,
}: {
  category: string;
  page: string | string[];
  perPage: string | string[];
}) {
  const data: simpleBlogCard[] = await getPostsByCategory(
    typeof category == "string" ? category : ""
  );
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const entries = perPage && page ? data.slice(start, end) : data;

  return (
    <div className="mt-8 md:mt-12 px-10">
      <h2 className="font-bold text-xl md:text-2xl mb-4">Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        {entries.map((post, idx) => (
          <Card key={idx} className="flex flex-col my-4 md:flex-row">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={300}
              height={200}
              className="rounded-l-lg w-full max-w-[300px] max-h-[250px] object-cover"
            />

            <CardContent className="mt-5">
              <div className="flex items-center">
                <span className="flex items-center text-sm">
                  {format(post.date, "MMM dd, yyyy")}
                </span>
                <Badge className="ml-2 text-center dark:text-white dark:font-light">
                  {post.category?.name}
                </Badge>
              </div>
              <h3 className="text-lg line-clamp-2 font-bold mt-2">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="mt-7 dark:text-white">
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
        perPage={Number(perPage)}
      />
    </div>
  );
}
