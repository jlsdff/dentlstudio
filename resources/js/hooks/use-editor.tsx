import { useMemo } from "react";
import { Editor, useEditor as useTipTap } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Heading1, Star } from 'lucide-react'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'

const extensions = [
    StarterKit.configure({
        heading: false
    }),
    Heading.configure({
        levels: [1, 2, 3]
    }),
    Image
]

const initialContent = '<h1>Hello World!</h1>'

export default function useEditor({ content }: { content: string | null }) {

    const editor = useTipTap({
        extensions,
        content: content || initialContent,
        injectCSS: false,
        immediatelyRender: false
    })

    return { editor }
}
