import { useState, useEffect } from "react";
import { useEditor as useTipTap } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { Tag } from "@/types";

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
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);


    useEffect(() => {
        fetch('/tags', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setTags(res)
            })
    }, []);

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
        setTags,
        selectedTags,
        setSelectedTags
    }
}
