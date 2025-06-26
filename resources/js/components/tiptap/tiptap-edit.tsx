import { Post } from "@/types"
import useEditor, { extensions } from "@/hooks/use-editor"
import { generateHTML } from '@tiptap/html'
import { useEffect } from "react";
import TiptapToolbar from "./toolbar";
import { EditorContent } from "@tiptap/react";
import EditorSidebar from "./editor-sidebar";

interface TiptapEditProps {
    post: Post;
}

export default function TiptapEdit({ post }: TiptapEditProps) {

    const content = generateHTML(JSON.parse(post.content), extensions)

    const {
        editor,
        processing,
        description,
        setDescription,
        coverImage,
        setCoverImage,
        tags,
        setTags,
        selectedTags,
        setSelectedTags,
        update
    } = useEditor({ content: content })

    useEffect(() => {
        if (post.tags) {
            const initTags = post.tags
            setSelectedTags(initTags)
        }
        setDescription(post.description)
    }, [post])

    return (
        <main>
            <section className="sticky top-0 z-50 border shadow-md border-b-gray-500 bg-gray-100 flex justify-center">
                <TiptapToolbar
                    editor={editor}
                    save={update}
                    processing={processing}
                    post={post}
                />
            </section>
            <section className="p-4 gap-2 grid grid-cols-1 md:grid-cols-8">
                <div className="md:col-span-6">
                    <EditorContent className="editor-content" editor={editor} />
                </div>
                <div className="md:col-span-2">
                    <div className="sticky top-19 p-2 border shadow-md rounded-md">
                        <EditorSidebar
                            description={description}
                            setDescription={setDescription}
                            coverImage={coverImage}
                            setCoverImage={setCoverImage}
                            tags={tags}
                            setTags={setTags}
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
