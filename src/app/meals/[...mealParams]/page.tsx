import Breadcrumb, { BreadcrumbType } from "@/components/molecules/breadcrumb";
import DetailMeals from "@/components/pages/meals/detail-meals";
import { getDetailMeal } from "@/services/meals";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
  params,
}: {
  params: {
    mealParams: string[];
  };
}) => {
  const data = await getDetailMeal(params.mealParams[1]);
  const filterParams = params.mealParams[0].split("-");
  if (!data) redirect(`/${filterParams[0]}`);

  const breadcrumbData: BreadcrumbType[] = [
    {
      name: filterParams[1].replace(/%20/g, " "),
      path: `/${filterParams[0]}/${filterParams[1].replace(/%20/g, " ")}`,
    },
    {
      name: data?.strMeal,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb data={breadcrumbData} />
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
