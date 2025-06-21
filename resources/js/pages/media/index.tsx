import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Media, Paginate } from '@/types';
import { Head } from "@inertiajs/react";
import MediaDialog from "@/components/media/media-upload-dialog";
import MediaTable from "@/components/media/media-table";
import PaginationComponent from "@/components/custom-pagination"
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Medias",
        href: '/medias',
    }
]

export default function MediaPage({ medias }: { medias: Paginate<Media> }) {

    console.log("data", medias.data)
    console.log("medias", medias)

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Media" />
            <section className="p-4 flex justify-end">
                <MediaDialog />
            </section>
            <main className="px-4">
                <MediaTable medias={medias.data} />
                <PaginationComponent paginatedData={medias} />
            </main>
        </AppLayout>
    )
}


