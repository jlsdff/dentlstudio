import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Inquiry, Paginate } from '@/types';
import { Head } from "@inertiajs/react";
import MediaDialog from "@/components/media/media-upload-dialog";
import MediaTable from "@/components/media/media-table";
import PaginationComponent from "@/components/custom-pagination"
import InquiryTable from "@/components/inquiries/inquiry-table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Inquiries",
        href: '/inquiries',
    }
]

export default function InquiryPage({ inquiries }: { inquiries: Paginate<Inquiry> }) {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Media" />
            <main className="px-4">
                {/* <MediaTable medias={medias.data} /> */}
                <InquiryTable inquiries={inquiries.data} />
                <PaginationComponent paginatedData={inquiries} />
            </main>
        </AppLayout>
    )
}


