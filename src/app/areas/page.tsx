import AllAreas from "@/components/pages/areas/all-areas";
import { getAllAreas } from "@/services/areas";

const Page = async () => {
  const data = await getAllAreas();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite country on{" "}
          <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <AllAreas data={data} />
    </div>
  );
};

export default Page;
