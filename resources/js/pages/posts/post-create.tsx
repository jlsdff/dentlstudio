
import Tiptap from '@/components/tiptap/tiptap'
import { Head } from '@inertiajs/react'

type PostForm = {
    title: 'string',
    content: 'string'
}

export default function NewPost() {

    return (
        <main className='min-h-svh'>
            <Head title='New Post' />
            <Tiptap />
        </main>
    )
}
