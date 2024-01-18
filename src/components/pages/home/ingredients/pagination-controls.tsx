"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  length: number;
};

const PaginationControls: React.FC<Props> = ({
  hasNextPage,
  hasPrevPage,
  length,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = 10;
  const pageCount = Math.ceil(Number(length) / Number(per_page));

  // if(page != )
  if (Number(page) > pageCount) router.push(`/ingredients`);

  return (
    <div className="flex gap-2 items-center justify-end">
      <Button
        variant={"ghost"}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/ingredients?page=${Number(page) - 1}`);
        }}
      >
        <ChevronLeftIcon />
      </Button>

      <p>
        {page} / {pageCount}
      </p>

      <Button
        variant={"ghost"}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/ingredients?page=${Number(page) + 1}`);
        }}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default PaginationControls;
