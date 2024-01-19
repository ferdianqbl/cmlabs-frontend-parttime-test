import AllMealByIngredient from "@/components/pages/ingredient-detail/all-meals-by-ingredient";
import { getAllMealsByIngredient } from "@/services/meals";

const Page = async ({
  params,
}: {
  params: {
    ingredientName: string;
  };
}) => {
  const data = await getAllMealsByIngredient({
    type: "ingredient",
    query: params.ingredientName.replace(/%20/g, "_"),
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite meal with{" "}
          <span className="text-green-600">
            {params.ingredientName.replace(/%20/g, " ")}
          </span>{" "}
          on <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <AllMealByIngredient
        data={data}
        ingredientName={params.ingredientName.replace(/%20/g, " ")}
      />
    </div>
  );
};

export default Page;
