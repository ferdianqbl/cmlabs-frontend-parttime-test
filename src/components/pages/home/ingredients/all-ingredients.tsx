"use client";
import ItemCard from "@/components/molecules/item-card";
import { IngredientType } from "@/services/ingredients";
import Link from "next/link";
import PaginationControls from "./pagination-controls";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  data: IngredientType[];
};

const AllIngredients: React.FC<Props> = ({ data }) => {
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
  const [entries, setEntries] = useState<IngredientType[]>(
    data.slice(pagination.start, pagination.end)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filtered = data.filter((item) =>
      item.strIngredient.toLowerCase().includes(search.toLowerCase())
    );
    setEntries(filtered);
    setPagination({
      ...pagination,
      page: 1,
      start: 0,
      end: 10,
      data_length: filtered.length,
    });
  };

  const handlePagination = (page: number) => {
    const start = (page - 1) * pagination.per_page; // 0, 5, 10 ...
    const end = start + pagination.per_page; // 5, 10, 15 ...
    const entries = data.slice(start, end);
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
      />
      <PaginationControls
        handlePagination={handlePagination}
        pagination={pagination}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {entries.map((item, index) => (
          <Link
            key={`${item.strIngredient}__${index}`}
            href={`/ingredients/${item.strIngredient}`}
            className="w-full h-full duration-300 ease-in-out transform hover:scale-105"
          >
            <ItemCard title={item.strIngredient} body={item.strDescription} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllIngredients;
