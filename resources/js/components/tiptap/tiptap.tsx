// src/Tiptap.tsx
import { EditorContent } from '@tiptap/react'
import useEditor from '@/hooks/use-editor';
import TiptapToolbar from './toolbar'
import EditorSidebar from './editor-sidebar';

const Tiptap = () => {

    const { editor,
        save,
        processing,
        description,
        setDescription,
        coverImage,
        setCoverImage,
        tags,
        setTags,
        selectedTags,
        setSelectedTags
    } = useEditor({ content: null });

    return (
        <section className=''>
            {
                editor ? (
                    <>
                        <section className="sticky top-0 z-50 border shadow-md border-b-gray-500 bg-gray-100 flex justify-center">
                            <TiptapToolbar editor={editor} save={save} processing={processing} />
                        </section>
                        <section className='p-4 gap-2 grid grid-cols-1 md:grid-cols-8'>
                            <div className='md:col-span-6'>
                                <EditorContent className='editor-content ' editor={editor} />
                            </div>
                            <div className='md:col-span-2'>
                                <div className='sticky top-19 p-2 border shadow-md rounded-md'>
                                    {/* this container stays even though the user scrolls */}
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
                    </>
                ) : (
                    <div className='text-white'>
                        wait...
                    </div>
                )
            }
            {/* <FloatingMenu editor={editor} >This is the floating menu</FloatingMenu> */}
            {/* <BubbleMenu editor={editor} className='bg-gray-900 text-gray-100'>This is the bubble menu</BubbleMenu> */}
        </section>
    )
}

export default Tiptap

