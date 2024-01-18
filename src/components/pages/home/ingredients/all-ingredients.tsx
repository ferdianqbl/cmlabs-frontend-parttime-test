import ItemCard from "@/components/molecules/item-card";
import { getAllIngredients } from "@/services/ingredients";
import Link from "next/link";

const AllIngredients = async () => {
  const data = await getAllIngredients();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {data.meals.map((item, index) => (
        <Link
          key={`${item.strIngredient}__${index}`}
          href={`/ingredients/${item.strIngredient}`}
          className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
        >
          <ItemCard title={item.strIngredient} body={item.strDescription} />
        </Link>
      ))}
    </div>
  );
};

export default AllIngredients;
