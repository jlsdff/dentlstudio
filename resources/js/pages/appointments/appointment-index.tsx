import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Appointments",
        href: '/appointments/index'
    }
]

export default function AppointmentIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <main>
                This is the appointments section
            </main>
        </AppLayout>
    )
}

