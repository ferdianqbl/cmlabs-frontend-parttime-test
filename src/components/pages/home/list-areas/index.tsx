"use client";
import ItemCardOverlay from "@/components/molecules/item-card-overlay";
import ListLoading from "@/components/molecules/list-loading";
import { AreaType, getAllAreas } from "@/services/areas";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListAreas = () => {
  const [data, setData] = useState<AreaType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getData = async () => {
    setIsLoading(true);
    const data = await getAllAreas();
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
          key={`${data[item].strArea}__${item}`}
          href={`/categories/${data[item].strArea}`}
          className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
        >
          <Link
            key={`${data[item].strArea}__${item}`}
            href={`/areas/${data[item].strArea}`}
            className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
          >
            <ItemCardOverlay
              title={data[item].strArea}
              imgUrl={`https://source.unsplash.com/random/200×300/?${data[item].strArea}`}
            />
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default ListAreas;
