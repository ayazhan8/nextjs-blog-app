import React from "react";
import FeaturedPosts from "./components/FeaturedPosts";
import Categories from "./components/Categories";
import RecentPosts from "./components/RecentPosts";
import SupportBlock from "./components/SupportBlock";

function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '2';

  return (
    <div className="flex justify-center mx-4 my-8 gap-8 flex-col sm:flex-row">
      <div className="flex-1">
        <FeaturedPosts />
        <RecentPosts page={page} perPage={per_page}/>
      </div>
      <div className="mx-12 flex-shrink-0 max-w-xs">
        <SupportBlock />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
