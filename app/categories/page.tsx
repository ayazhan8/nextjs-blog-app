import Categories from "../components/Categories";

const CategoriesPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "4";
  return <Categories />;
};

export default CategoriesPage;
