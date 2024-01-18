import ItemCard from "@/components/molecules/item-card";
import { IngredientType } from "@/services/ingredients";
import Link from "next/link";
import PaginationControls from "./pagination-controls";

type Props = {
  data: IngredientType[];
  searchParams: { [key: string]: string | string[] | undefined };
};

const AllIngredients: React.FC<Props> = async ({ data, searchParams }) => {
  const page = searchParams["page"] ?? "1";
  const per_page = 10;

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = data.slice(start, end);
  return (
    <div className="flex flex-col gap-4">
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        length={data.length}
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
