import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Appointments",
        href: '/appointments/index'
    }
]

export default function AppointmentIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appointments" />
            <main className="px-4 py-2">
                This is the appointments section
            </main>
        </AppLayout>
    )
}

