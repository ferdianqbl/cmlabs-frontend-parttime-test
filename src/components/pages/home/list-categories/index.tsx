import ItemCard from "@/components/molecules/item-card";
import { getAllCategories } from "@/services/categories";
import Link from "next/link";

const ListCategories = async () => {
  const data = await getAllCategories();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Link
          key={`${data[item].strCategory}__${item}`}
          href={`/categories/${data[item].strCategory}`}
          className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
        >
          <ItemCard
            title={data[item].strCategory}
            body={data[item].strCategoryDescription}
            imgUrl={data[item].strCategoryThumb || ""}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListCategories;
