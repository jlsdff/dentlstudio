import { useState, useEffect } from "react";
import { useEditor as useTipTap } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { Tag } from "@/types";
import Link from '@tiptap/extension-link';

export const extensions = [
    StarterKit.configure({
        heading: false
    }),
    Heading.configure({
        levels: [1, 2, 3]
    }),
    Image,
    Link
]

const initialContent = '<h1>Title</h1>'

const getTitle = (content: any) => {
    for (const node of content) {
        if (node.type === 'heading' && node.attrs?.level === 1) {
            return node.content?.map((c: any) => c.text).join('') || null;
        }
    }
    return null;
}

const getCoverImage = (content: any) => {
    for (const node of content) {
        if (node.type === 'image') {
            return node.attrs?.src || null;
        }
    }
    return null;
}

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

    const onUpdate = ({ status, id }: { title: string, content: string, status: string, id?: number | null }) => {

        const jsonContent = editor?.getJSON();

        const cover = getCoverImage(jsonContent?.content);
        const blogTitle = getTitle(jsonContent?.content);

        if (!blogTitle) {
            toast.error("Post must have a title.")
            return;
        }

        if (!description) {
            toast.error("Post description is required.")
            return
        }

        if (!cover) {
            toast.error("Cover image is required.")
            return;
        }

        if (selectedTags.length === 0) {
            toast.error("You must enter atleast one tag.")
            return;
        }

        router.patch(route('post.update', { id: id }), {
            title: blogTitle,
            content: jsonContent,
            status,
            cover: cover,
            description,
            tags: selectedTags.map(tag => tag.id)
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
            onError: (errors) => {
                toast.error(errors.message)
            }
        })

    }

    const onSubmit = ({ status }: { title: string, content: string, status: string, id?: number }) => {

        const jsonContent = editor?.getJSON();

        const cover = getCoverImage(jsonContent?.content);
        const blogTitle = getTitle(jsonContent?.content);

        if (!blogTitle) {
            toast.error("Post must have a title.")
            return;
        }

        if (!description) {
            toast.error("Post description is required.")
            return
        }

        if (!cover) {
            toast.error("Cover image is required.")
            return;
        }

        if (selectedTags.length === 0) {
            toast.error("You must enter atleast one tag.")
            return;
        }

        console.log("before:", {
            title: blogTitle,
            content: jsonContent,
            status,
            cover: cover,
            description,
            tags: selectedTags.map(tag => tag.id)
        })

        router.post(route('post.store'), {
            title: blogTitle,
            content: jsonContent,
            status,
            cover: cover,
            description,
            tags: selectedTags.map(tag => tag.id)
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
            onError: (errors) => {
                toast.error(errors.message)
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
        update: onUpdate,
        processing,
        description,
        setDescription,
        coverImage,
        setCoverImage,
        tags,
        setTags,
        selectedTags,
        setSelectedTags,
    }
}
