
import Tiptap from '@/components/tiptap/tiptap'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, useForm } from '@inertiajs/react'

type PostForm = {
    title: 'string',
    content: 'string'
}
const breadcrumbs: BreadcrumbItem[] = [{
    title: 'New post',
    href: '/post/create'
}]

export default function NewPost() {

    // const { data, setData, post: submit, processing, errors } = useForm<Required<PostForm>>({
    //     title: 'tang ina',
    //     content: 'tang ina'
    // })

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='New Post' />

            <Tiptap />

        </AppLayout>
    )
}
