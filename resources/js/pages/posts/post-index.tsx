import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Pen } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs posts',
        href: "/post/index"
    },
]

export default function Posts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <section className="flex px-4 py-4 justify-between items-center">
                <div>
                    <h2>All Blogs</h2>
                </div>
                <div>
                    <Link href="/post/create" className="flex gap-2 items-center" >
                        <Pen size={16} /> <span className="text-xs">Write New</span>
                    </Link>
                </div>
            </section>
            <div>This is the all the blogs</div>
        </AppLayout>
    )
}

