import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const pages: JSX.Element[] = [];
  for (let page = minPage; page <= maxPage; page++) {
    pages.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ${
          currentPage === page
            ? "bg-[#00416a] text-white shadow-md pointer-events-none"
            : "bg-white text-[#243a50] border border-[#e4e5e6] hover:bg-[#e4e5e6]"
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {currentPage > 1 && (
        <Link
          href={"?page=" + (currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#e4e5e6] text-[#243a50] hover:bg-[#e4e5e6] transition-all duration-200 font-semibold"
        >
          ‹
        </Link>
      )}
      <div className="hidden sm:flex items-center gap-2">{pages}</div>
      <div className="sm:hidden">
        <span className="px-4 h-10 flex items-center bg-[#00416a] text-white font-semibold rounded-xl text-sm">
          Page {currentPage}
        </span>
      </div>
      {currentPage < totalPages && (
        <Link
          href={"?page=" + (currentPage + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#e4e5e6] text-[#243a50] hover:bg-[#e4e5e6] transition-all duration-200 font-semibold"
        >
          ›
        </Link>
      )}
    </div>
  );
}
