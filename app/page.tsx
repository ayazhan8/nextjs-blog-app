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
    <div className="flex mx-4 my-8 gap-8 flex-col lg:flex-row sm:mx-8">
      <div className="lg:w-3/4">
        <FeaturedPosts />
        <RecentPosts page={page} perPage={per_page}/>
      </div>
      <div className="lg:w-1/4">
        <Categories />
        <SupportBlock />
      </div>
    </div>
  );
}

export default Home;
