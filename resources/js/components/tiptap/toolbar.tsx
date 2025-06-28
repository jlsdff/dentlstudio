// src/toolbar.tsx
import { Editor } from '@tiptap/react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Bold,
    Italic,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Type,
    LoaderCircle,
} from 'lucide-react'
import MediaSheet from '../media/media-sheet'
import LinkButton from './link-mark'
import { Post } from '@/types'
import Youtube from '@tiptap/extension-youtube'
import YouTubeButton from './youtube-node'

interface TiptapToolbarProps {
    editor: Editor | null;
    save: ({ title, content, status, id }: { title: string, content: string, status: string, id?: number }) => void;
    processing: boolean;
    post?: Post
}

const TiptapToolbar = ({ editor, save, processing, post }: TiptapToolbarProps) => {

    if (!editor) {
        return null
    }

    const handleSavePost = (status: string) => {
        save({
            title: "Sample Blog",
            content: editor.getHTML(),
            status: status,
            id: post?.id
        })
    }

    return (
        <section className='flex justify-between items-center w-full px-4'>

            <div className="flex items-center gap-1 p-2 flex-wrap ">
                {/* Undo/Redo */}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="h-8 px-2"
                >
                    <Undo className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="h-8 px-2"
                >
                    <Redo className="h-4 w-4" />
                </Button>

                <div className='w-1 h-6 bg-[var(--foreground)]/30 rounded-md mx-1' />

                {/* Headings */}
                <Button
                    variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className="h-8 px-2"
                >
                    <Heading1 className="h-4 w-4" />
                </Button>
                <Button
                    variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className="h-8 px-2"
                >
                    <Heading2 className="h-4 w-4" />
                </Button>
                <Button
                    variant={editor.isActive('heading', { level: 3 }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className="h-8 px-2"
                >
                    <Heading3 className="h-4 w-4" />
                </Button>
                <Button
                    variant={editor.isActive('paragraph') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className="h-8 px-2"
                >
                    <Type className="h-4 w-4" />
                </Button>

                <div className='w-1 h-6 bg-[var(--foreground)]/30 rounded-md mx-1' />

                <Button
                    variant={editor.isActive('bold') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().toggleBold()}
                    className="h-8 px-2"
                >
                    <Bold className="h-4 w-4" />
                </Button>

                <Button
                    variant={editor.isActive('italic') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().toggleItalic()}
                    className="h-8 px-2"
                >
                    <Italic className="h-4 w-4" />
                </Button>

                <Button
                    variant={editor.isActive('strike') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().toggleStrike()}
                    className="h-8 px-2"
                >
                    <Strikethrough className="h-4 w-4" />
                </Button>

                <LinkButton editor={editor} />

                <div className='w-1 h-6 bg-[var(--foreground)]/30 rounded-md mx-1' />

                {/* Lists */}
                <Button
                    variant={editor.isActive('bulletList') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className="h-8 px-2"
                >
                    <List className="h-4 w-4" />
                </Button>
                <Button
                    variant={editor.isActive('orderedList') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className="h-8 px-2"
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>


                <Separator orientation="vertical" className="h-6" />

                {/* Blockquote */}
                <Button
                    variant={editor.isActive('blockquote') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className="h-8 px-2"
                >
                    <Quote className="h-4 w-4" />
                </Button>

                <YouTubeButton editor={editor} />

                <Separator orientation="vertical" className="h-6" />

                <MediaSheet editor={editor} />

                <Separator orientation="vertical" className="h-6" />


            </div>

            <div className='flex gap-2'>
                <Button
                    variant="outline"
                    onClick={() => {
                        handleSavePost('draft')
                    }}
                    disabled={processing}
                >
                    {processing && <LoaderCircle className='animate-spin' />}
                    Save as Draft
                </Button>
                <Button disabled={processing} onClick={() => {
                    handleSavePost('published')
                }}>
                    {processing && <LoaderCircle className='animate-spin' />}
                    Publish Post
                </Button>
            </div>
        </section>
    )
}

export default TiptapToolbar
