"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type Props = {
  pagination: {
    page: number;
    per_page: number;
    data_length: number;
    start: number;
    end: number;
  };
  handlePagination: (page: number) => void;
};

const PaginationControls: React.FC<Props> = ({
  handlePagination,
  pagination,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-sm">
        {pagination.page} from{" "}
        {Math.ceil(pagination.data_length / pagination.per_page)}
      </p>
      <div className="flex gap-2 items-center justify-end">
        <Button
          variant={"ghost"}
          className={`${pagination.page <= 1 ? "hidden" : ""}`}
          onClick={() => handlePagination(pagination.page - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant={"ghost"}
          className={`${pagination.page <= 1 ? "hidden" : ""}`}
          onClick={() => handlePagination(pagination.page - 1)}
        >
          {pagination.page - 1}
        </Button>

        <p className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-accent text-accent-foreground">
          {pagination.page}
        </p>

        <Button
          variant={"ghost"}
          className={`${
            pagination.page >=
            Math.ceil(pagination.data_length / pagination.per_page)
              ? "hidden"
              : ""
          }`}
          onClick={() => handlePagination(pagination.page + 1)}
        >
          {pagination.page + 1}
        </Button>
        <Button
          variant={"ghost"}
          className={`${
            pagination.page >=
            Math.ceil(pagination.data_length / pagination.per_page)
              ? "hidden"
              : ""
          }`}
          onClick={() => handlePagination(pagination.page + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default PaginationControls;
