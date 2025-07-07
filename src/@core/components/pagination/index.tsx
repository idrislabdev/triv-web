// Pagination.tsx
import React, { useMemo } from "react";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // berapa halaman di kiri‑kanan page aktif (default 1)
}

const DOTS = "…"; // atau gunakan "..." jika ingin
type PageItem = number | typeof DOTS;

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  // Hitung daftar elemen (angka & DOTS) yang harus ditampilkan
  const paginationRange = useMemo<PageItem[]>(() => {
    const totalNumbers = siblingCount * 2 + 5; // angka max yg ditampilkan jika tanpa DOTS
    if (totalPages <= totalNumbers) return range(1, totalPages);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      // 1 2 3 … 10
      return [...range(1, 3 + siblingCount * 2), DOTS, totalPages];
    }

    if (showLeftDots && !showRightDots) {
      // 1 … 8 9 10
      return [
        1,
        DOTS,
        ...range(totalPages - (2 + siblingCount * 2), totalPages),
      ];
    }

    // 1 … 4 5 6 … 10
    return [
      1,
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      totalPages,
    ];
  }, [currentPage, totalPages, siblingCount]);

  // ---------- Helper ----------
  const handleClick = (page: PageItem) => () => {
    if (page === DOTS || page === currentPage) return;
    onPageChange(page as number);
  };

  const btnCls = (page: number) =>
    clsx(
      "w-8 h-8 flex items-center justify-center rounded border text-sm mx-0.5",
      page === currentPage
        ? "bg-sky-400 text-white border-sky-400"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
    );

  return (
    <nav className="flex items-center space-x-1 select-none">
      {/* Prev */}
      <button
        onClick={
          currentPage === 1 ? undefined : () => onPageChange(currentPage - 1)
        }
        className={clsx(
          "px-2 text-sm",
          currentPage === 1
            ? "text-gray-300 cursor-default"
            : "text-sky-500 hover:underline"
        )}
      >
        Prev
      </button>

      {/* Page numbers & dots */}
      {paginationRange.map((page, idx) =>
        page === DOTS ? (
          <span key={idx} className="mx-1 text-gray-500">
            {DOTS}
          </span>
        ) : (
          <button
            key={idx}
            onClick={handleClick(page)}
            className={btnCls(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={
          currentPage === totalPages
            ? undefined
            : () => onPageChange(currentPage + 1)
        }
        className={clsx(
          "px-2 text-sm",
          currentPage === totalPages
            ? "text-gray-300 cursor-default"
            : "text-sky-500 hover:underline"
        )}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
