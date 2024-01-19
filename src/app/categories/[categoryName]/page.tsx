import AllMealByCategory from "@/components/pages/category-detail/all-meals-by-category";
import AllMealByIngredient from "@/components/pages/ingredient-detail/all-meals-by-ingredient";
import { getAllMealsByType } from "@/services/meals";

const Page = async ({
  params,
}: {
  params: {
    categoryName: string;
  };
}) => {
  const data = await getAllMealsByType({
    type: "category",
    query: params.categoryName.replace(/%20/g, "_"),
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite meal in the{" "}
          <span className="text-green-600">
            {params.categoryName.replace(/%20/g, " ")}
          </span>{" "}
          category on <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <AllMealByCategory data={data} categoryName={params.categoryName} />
    </div>
  );
};

export default Page;
