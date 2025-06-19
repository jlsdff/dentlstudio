import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export interface paginateLink {
    url: string;
    label: string;
    active: boolean;
}

export interface Paginate<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number | null;
    last_page: number | null;
    last_page_url: string | null;
    links: paginateLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface PaginationComponentProps<T> {
    paginatedData: Paginate<T>;
    preserveScroll?: boolean;
    preserveState?: boolean;
    className?: string;
}

export default function PaginationComponent<T>({
                                                   paginatedData,
                                                   preserveScroll = true,
                                                   preserveState = true,
                                                   className,
                                               }: PaginationComponentProps<T>) {
    const { url: currentUrl } = usePage();

    const {
        current_page,
        last_page,
        links,
        from,
        to,
        total,
    } = paginatedData;

    // Don't render if there's only one page or no data
    if (!last_page || last_page <= 1) {
        return null;
    }

    const handlePageChange = (page: number) => {
        // Parse current URL to get existing parameters
        const url = new URL(currentUrl, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
        const params = new URLSearchParams(url.search);

        // Update page parameter
        params.set('page', page.toString());

        // Navigate using current route with updated parameters
        router.get(url.pathname, Object.fromEntries(params), {
            preserveScroll,
            preserveState,
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const showEllipsis = last_page > 7;

        if (!showEllipsis) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= last_page; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => handlePageChange(i)}
                            isActive={i === current_page}
                            className="cursor-pointer"
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            // Complex pagination with ellipsis
            // Always show first page
            pageNumbers.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        onClick={() => handlePageChange(1)}
                        isActive={1 === current_page}
                        className="cursor-pointer"
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );

            // Show ellipsis after first page if current page is far from start
            if (current_page > 4) {
                pageNumbers.push(
                    <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            // Show pages around current page
            const start = Math.max(2, current_page - 1);
            const end = Math.min(last_page - 1, current_page + 1);

            for (let i = start; i <= end; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => handlePageChange(i)}
                            isActive={i === current_page}
                            className="cursor-pointer"
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            }

            // Show ellipsis before last page if current page is far from end
            if (current_page < last_page - 3) {
                pageNumbers.push(
                    <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            // Always show last page (if it's not already shown)
            if (last_page !== current_page && last_page !== current_page + 1) {
                pageNumbers.push(
                    <PaginationItem key={last_page}>
                        <PaginationLink
                            onClick={() => handlePageChange(last_page)}
                            isActive={last_page === current_page}
                            className="cursor-pointer"
                        >
                            {last_page}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        }

        return pageNumbers;
    };

    const hasPrevious = current_page > 1;
    const hasNext = current_page < last_page;

    return (
        <div className={`flex flex-col items-center space-y-4 ${className}`}>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => hasPrevious && handlePageChange(current_page - 1)}
                            className={`cursor-pointer ${!hasPrevious ? 'pointer-events-none opacity-50' : ''}`}
                        />
                    </PaginationItem>

                    {renderPageNumbers()}

                    <PaginationItem>
                        <PaginationNext
                            onClick={() => hasNext && handlePageChange(current_page + 1)}
                            className={`cursor-pointer ${!hasNext ? 'pointer-events-none opacity-50' : ''}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <div className="text-sm text-muted-foreground">
                Showing {from} to {to} of {total} results
            </div>
        </div>
    );
}
