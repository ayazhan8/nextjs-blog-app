"use client";

import { FC } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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
  perPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  itemsCount,
  perPage,
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const pagesCount = Math.ceil(itemsCount / perPage);
  const pagesArr = Array.from(Array(pagesCount).keys());

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          <PaginationItem className="list-none">
            <PaginationPrevious
              className={clsx({
                hidden: !hasPrevPage,
              })}
              href={`/?page=${Number(page) - 1}&per_page=${perPage}`}
            />
          </PaginationItem>
          <PaginationItem className="list-none">
            <div className="flex items-center justify-center">
              {pagesArr.map((index: number) => (
                <PaginationLink
                  key={index}
                  href={`?page=${index + 1}&per_page=${perPage}`}
                >
                  {index + 1}
                </PaginationLink>
              ))}
            </div>
          </PaginationItem>
          <PaginationItem
            className={clsx({
              hidden: pagesCount < 5,
            })}
          >
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="list-none">
            <PaginationNext
              className={clsx({
                hidden: !hasNextPage,
              })}
              href={`?page=${Number(page) + 1}&per_page=${perPage}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControls;
