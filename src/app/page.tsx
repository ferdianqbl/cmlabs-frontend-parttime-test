import ListAreas from "@/components/pages/home/list-areas";
import ListCategories from "@/components/pages/home/list-categories";
import ListIngredients from "@/components/pages/home/list-ingredients";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome to <span className="text-blue-600">Foodpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog that you can find your favorite food and see the
          recipe.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">Latest</span> Ingredients
        </h2>
        <small className="mb-4 text-gray-400">
          Find your favorite meal with the ingredients you have.
        </small>
        <ListIngredients />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">Latest</span> Categories
        </h2>
        <small className="mb-4 text-gray-400">
          Find your favorite meal with the category you want.
        </small>
        <ListCategories />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">Latest</span> Areas
        </h2>
        <small className="mb-4 text-gray-400">
          Find your favorite meal with the area you want.
        </small>
        <ListAreas />
      </div>
    </div>
  );
}
