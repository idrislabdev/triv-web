import React, { useMemo } from "react";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const DOTS = "…";
type PageItem = number | typeof DOTS;

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = useMemo<PageItem[]>(() => {
    const totalNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalNumbers) return range(1, totalPages);

    const left = Math.max(currentPage - siblingCount, 1);
    const right = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = left > 2;
    const showRightDots = right < totalPages - 1;

    if (!showLeftDots && showRightDots)
      return [...range(1, 3 + siblingCount * 2), DOTS, totalPages];

    if (showLeftDots && !showRightDots)
      return [
        1,
        DOTS,
        ...range(totalPages - (2 + siblingCount * 2), totalPages),
      ];

    return [1, DOTS, ...range(left, right), DOTS, totalPages];
  }, [currentPage, totalPages, siblingCount]);

  const handleClick = (page: PageItem) => () => {
    if (page === DOTS || page === currentPage) return;
    onPageChange(page as number);
  };

  return (
    <nav className="pagination">
      {/* Prev */}
      <button
        className="nav-button"
        disabled={currentPage === 1}
        onClick={
          currentPage === 1 ? undefined : () => onPageChange(currentPage - 1)
        }
      >
        Prev
      </button>

      {/* Numbers & dots */}
      {paginationRange.map((page, i) =>
        page === DOTS ? (
          <span key={i} className="ellipsis">
            {DOTS}
          </span>
        ) : (
          <button
            key={i}
            onClick={handleClick(page)}
            className={clsx("page-button", { active: page === currentPage })}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        className="nav-button"
        disabled={currentPage === totalPages}
        onClick={
          currentPage === totalPages
            ? undefined
            : () => onPageChange(currentPage + 1)
        }
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
