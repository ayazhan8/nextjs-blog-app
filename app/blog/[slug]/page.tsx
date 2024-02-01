import Categories from "@/app/components/Categories";
import SupportBlock from "@/app/components/SupportBlock";

import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage 
    }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div className="flex justify-center mx-4 my-8 gap-8 flex-col sm:flex-row">
      <div className="flex-1">
        <div className="mt-8 w-full">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Blog
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
              {data.title}
            </span>
          </h1>

          <Image
            src={urlFor(data.titleImage).url()}
            width={800}
            height={600}
            alt="Title Image"
            priority
            className="rounded-lg mt-8 border w-full"
          />

          <div className="mt-16 prose-blue prose-lg dark:prose-invert">
            <PortableText value={data.content} />
          </div>
        </div>
      </div>
      <div className="mx-12 flex-shrink-0 max-w-xs">
        <SupportBlock />
        <Categories />
      </div>
    </div>
  );
}
