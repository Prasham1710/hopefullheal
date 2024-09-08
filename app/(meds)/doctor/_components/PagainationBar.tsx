import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}
export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));
    
  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={`join-item px-4 py-2 rounded-md text-sm font-semibold ${
          currentPage === page
            ? "bg-blue-600 text-white pointer-events-none"
            : "bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300"
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
          <div className="flex justify-center my-6 space-x-2">
      {/* Pagination for larger screens */}
      <div className="hidden sm:flex space-x-2">
        {currentPage > 1 && (
          <Link
            href={"?page=" + (currentPage - 1)}
            className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300 rounded-md"
          >
            «
          </Link>
        )}
        {numberedPageItems}
        {currentPage < totalPages && (
          <Link
            href={"?page=" + (currentPage + 1)}
            className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300 rounded-md"
          >
            »
          </Link>
        )}
      </div>
      <div className="sm:hidden flex space-x-2">
        {currentPage > 1 && (
          <Link
            href={"?page=" + (currentPage - 1)}
            className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300 rounded-md"
          >
            «
          </Link>
        )}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md pointer-events-none">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link
            href={"?page=" + (currentPage + 1)}
            className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300 rounded-md"
          >
            »
          </Link>
        )}
      </div>
    </div>
  );
}

