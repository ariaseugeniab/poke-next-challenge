import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from './pagination';

interface PagePaginatorProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const PagePaginator = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PagePaginatorProps) => {
  const getVisiblePages = () => {
    const windowSize = 5; 
    const pages: (number | 'ellipsis')[] = [1];

    const start = Math.max(2, currentPage - windowSize);
    const end = Math.min(totalPages - 1, currentPage + windowSize);

    if (start > 2) {
      pages.push('ellipsis');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push('ellipsis');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {getVisiblePages().map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page as number);
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PagePaginator;
