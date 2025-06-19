import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, CursorPaginate, Media } from "@/types";
import { Head } from "@inertiajs/react";
import MediaDialog from "@/components/media/media-dialog";
import MediaTable from "@/components/media/media-table";
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Medias",
        href: '/medias',
    }
]

export default function MediaPage({ medias }: { medias: CursorPaginate<Media> }) {

    console.log("data", medias.data)

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Media" />
            <section className="p-4">
                <MediaDialog />
            </section>
            <main className="px-4">
                <MediaTable medias={medias.data} />
                <Pagination>
                    <PaginationContent>
                        <PaginationPrevious href={`${medias.prev_page_url}`} isActive={medias.prev_page_url ? true : false} />
                        <PaginationNext href={`${medias.next_page_url}`} />
                    </PaginationContent>
                </Pagination>
            </main>
        </AppLayout>
    )
}


