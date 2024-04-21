"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemsCount: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  itemsCount,
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = Number(searchParams.get("per_page") ?? "2");
  const pagesCount = Math.ceil(itemsCount / per_page);
  const pagesArr = Array.from(Array(pagesCount).keys());

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
            className={clsx({
              'hidden':  !hasPrevPage
            })}
              href={`/?page=${Number(page) - 1}&per_page=${per_page}`}
            />
          </PaginationItem>
          <PaginationItem>
            <div className="flex items-center justify-center">
              {pagesArr.map((index: number) => (
                <PaginationLink href={`/?page=${index+1}&per_page=${per_page}`}>{index + 1}</PaginationLink>
              ))}
            </div>
          </PaginationItem>
          <PaginationItem
            className={clsx({
              'hidden': pagesCount < 5,
            })}
          >
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
            className={clsx({
              'hidden':  !hasNextPage
            })}
              href={`/?page=${Number(page) + 1}&per_page=${per_page}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControls;
