"use client";
import ItemCard from "@/components/molecules/item-card";
import ListLoading from "@/components/molecules/list-loading";
import { CategoryType, getAllCategories } from "@/services/categories";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListCategories = () => {
  const [data, setData] = useState<CategoryType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getData = async () => {
    setIsLoading(true);
    const data = await getAllCategories();
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
