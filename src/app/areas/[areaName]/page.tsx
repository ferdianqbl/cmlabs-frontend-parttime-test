import AllMealByArea from "@/components/pages/area-detail/all-meals-by-area";
import { getAllMealsByType } from "@/services/meals";

const Page = async ({
  params,
}: {
  params: {
    areaName: string;
  };
}) => {
  const data = await getAllMealsByType({
    type: "area",
    query: params.areaName.replace(/%20/g, "_"),
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite meal in{" "}
          <span className="text-green-600">
            {params.areaName.replace(/%20/g, " ")}
          </span>{" "}
          on <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <AllMealByArea data={data} areaName={params.areaName} />
    </div>
  );
};

export default Page;
