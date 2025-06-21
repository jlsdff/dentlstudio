// src/Tiptap.tsx
import { EditorContent } from '@tiptap/react'
import useEditor from '@/hooks/use-editor';
import TiptapToolbar from './toolbar'

const Tiptap = () => {

    const { editor } = useEditor({ content: null });

    return (
        <section className=''>
            {
                editor ? (
                    <>
                        <section className="sticky top-0 z-50 border shadow-md border-b-gray-500 bg-gray-100 flex justify-center">
                            <TiptapToolbar editor={editor} />
                        </section>
                        <section className='p-4 sm:px-12 '>
                            <EditorContent className='editor-content ' editor={editor} />
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

