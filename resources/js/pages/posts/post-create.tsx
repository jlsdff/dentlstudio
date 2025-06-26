
import Tiptap from '@/components/tiptap/tiptap'
import { Head } from '@inertiajs/react'
import { Toaster } from 'sonner'


export default function NewPost() {

    return (
        <main className='min-h-svh'>
            <Head title='New Post' />
            <Tiptap />
            <Toaster />
        </main>
    )
}
