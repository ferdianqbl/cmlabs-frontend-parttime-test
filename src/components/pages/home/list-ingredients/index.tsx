"use client";
import ItemCard from "@/components/molecules/item-card";
import ListLoading from "@/components/molecules/list-loading";
import { IngredientType, getAllIngredients } from "@/services/ingredients";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListIngredients = () => {
  const [data, setData] = useState<IngredientType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getData = async () => {
    setIsLoading(true);
    const data = await getAllIngredients();
    setData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <ListLoading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Link
          key={`${data[item].strIngredient}__${item}`}
          href={`/ingredients/${data[item].strIngredient}`}
          className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
        >
          <ItemCard
            title={data[item].strIngredient}
            body={data[item].strDescription}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListIngredients;
