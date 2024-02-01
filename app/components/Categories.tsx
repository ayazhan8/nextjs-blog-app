import { Category } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import { Badge, badgeVariants } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react'

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

    const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <>
            <h2 className="font-bold text-2xl my-3">Categories</h2>
            <div className="">
                {categories.map((category, idx) => (
                    <Badge variant="outline" className={`${getRandomColor()} mx-2 my-1 px-3 py-2 border-none`}>
                        <Link href={`/categories/${category.name.toLowerCase()}`} key={idx} className={`font-normal text-base dark:text-black`}>{category.name}</Link>
                    </Badge>
                ))}
            </div>
        </>
    )
}
