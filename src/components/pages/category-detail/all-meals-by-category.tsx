"use client";
import Link from "next/link";
import PaginationControls from "./pagination-controls";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MealType } from "@/services/meals";
import ItemCardOverlay from "@/components/molecules/item-card-overlay";

type Props = {
  data: MealType[];
  categoryName: string;
};

const AllMealByCategory: React.FC<Props> = ({ data, categoryName }) => {
  const [search, setSearch] = useState<string>("");
  const [pagination, setPagination] = useState<{
    page: number;
    per_page: number;
    data_length: number;
    start: number;
    end: number;
  }>({
    page: 1,
    per_page: 10,
    start: 0,
    end: 10,
    data_length: data.length,
  });
  const [filtered, setFiltered] = useState<MealType[]>(data);
  const [entries, setEntries] = useState<MealType[]>(
    filtered.slice(pagination.start, pagination.end)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredData = data.filter((item) =>
      item.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filteredData);
    setEntries(filteredData.slice(0, 10));
    setPagination({
      ...pagination,
      page: 1,
      start: 0,
      end: 10,
      per_page: 10,
      data_length: filteredData.length,
    });
  };

  const handlePagination = (page: number) => {
    const start = (page - 1) * pagination.per_page; // 0, 5, 10 ...
    const end = start + pagination.per_page; // 5, 10, 15 ...
    const entries = filtered.slice(start, end);
    setPagination({
      ...pagination,
      page,
      start,
      end,
    });
    setEntries(entries);
  };

  return (
    <div className="flex flex-col gap-6">
      <Input
        placeholder="Search by Name"
        type="text"
        id="search"
        autoComplete="off"
        value={search}
        onChange={handleSearch}
      />
      <PaginationControls
        handlePagination={handlePagination}
        pagination={pagination}
      />
      {entries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {entries.map((item, index) => (
            <Link
              key={`${item.strMeal}__${index}`}
              href={`/meals/${categoryName}/${item.idMeal}`}
              className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
            >
              <ItemCardOverlay
                title={item.strMeal}
                imgUrl={item.strMealThumb}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center w-full">No Data Found</p>
      )}
    </div>
  );
};

export default AllMealByCategory;
