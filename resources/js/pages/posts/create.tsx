
import Tiptap from '@/components/tiptap/tiptap'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, useForm } from '@inertiajs/react'

type PostForm = {
    title: 'string',
    content: 'string'
}
const breadcrumbs: BreadcrumbItem[] = [

    {
        title: "Posts",
        href: '/post/index'
    },
    {
        title: 'New post',
        href: '/post/create'
    },

]

export default function NewPost() {

    // const { data, setData, post: submit, processing, errors } = useForm<Required<PostForm>>({
    //     title: 'tang ina',
    //     content: 'tang ina'
    // })

    return (
        <main className='bg-gray-950 min-h-svh'>
            <Head title='New Post' />

            <Tiptap />
        </main>

    )
}
