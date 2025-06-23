import { useState } from "react";
import { FormEventHandler, useMemo } from "react";
import { Editor, useEditor as useTipTap } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Heading1, Star } from 'lucide-react'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import { router, useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { SheetContent } from "@/components/ui/sheet";

const extensions = [
    StarterKit.configure({
        heading: false
    }),
    Heading.configure({
        levels: [1, 2, 3]
    }),
    Image
]

const initialContent = '<h1>Title</h1>'

export default function useEditor({ content }: { content: string | null }) {

    const [processing, setProcessing] = useState(false)
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const onSubmit = ({ title, content, status }: { title: string, content: string, status: string }) => {

        router.post(route('post.store'), {
            title,
            content,
            status
        }, {
            onStart: () => {
                setProcessing(true)
            },
            onFinish: () => {
                setProcessing(false)
            },
            onSuccess: () => {
                toast.success("Post created")
            },
            onError: () => {
                toast.error("Somethis went wrong")
            }
        })

    }

    const editor = useTipTap({
        extensions,
        content: content || initialContent,
        injectCSS: false,
        immediatelyRender: false
    })

    return {
        editor,
        save: onSubmit,
        processing,
        description,
        setDescription,
        coverImage,
        setCoverImage,
        tags,
        setTags
    }
}
