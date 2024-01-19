import DetailMeals from "@/components/pages/meals/detail-meals";
import { getDetailMeal } from "@/services/meal";
import React from "react";

const Page = async ({
  params,
}: {
  params: {
    mealId: string;
  };
}) => {
  const data = await getDetailMeal(params.mealId);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Detail meal on <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <DetailMeals data={data} />
    </div>
  );
};

export default Page;
