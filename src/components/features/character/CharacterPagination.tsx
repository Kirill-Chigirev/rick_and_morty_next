"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { CharactersResponse } from "@/lib/types/character";
import { cn } from "@/lib/utils";
import { usePagination } from "@usefy/use-pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
type CharactersInfo = CharactersResponse["info"];

interface CharacterPaginationProps {
  info: CharactersInfo;
}

export default function CharacterPagination({ info }: CharacterPaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { count } = info;

  const { page, items, setPage, canNext, canPrev } = usePagination({
    total: count,
    pageSize: 20,
  });

  const urlPage = searchParams.get("page");

  useEffect(() => {
    setPage(Number(urlPage) || 1);
  }, [urlPage, setPage]);
  console.log("render");
  const changePage = (n: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(n));
    router.push(`/?${params.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!canPrev}
            onClick={canPrev ? () => changePage(page - 1) : (e) => e.preventDefault()}
            className={cn(!canPrev && "pointer-events-none opacity-50")}
          />
        </PaginationItem>
        {items.map((item, i) =>
          item.type === "ellipsis" ? (
            <PaginationItem key={`gap-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item.page}>
              <PaginationLink onClick={() => changePage(item.page!)} isActive={item.page === page}>
                {item.page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            aria-disabled={!canNext}
            onClick={canNext ? () => changePage(page + 1) : (e) => e.preventDefault()}
            className={cn(!canNext && "pointer-events-none opacity-50")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
