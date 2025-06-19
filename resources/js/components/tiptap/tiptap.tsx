// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Heading1, Star } from 'lucide-react'
import Heading from '@tiptap/extension-heading'
import TiptapToolbar from './toolbar'
import ImageComponent from './tiptap-image'
// import './styles.css'
// import extensions from './extensions'

const extensions = [
    StarterKit.configure({
        heading: false
    }),
    Heading.configure({
        levels: [1, 2, 3]
    })
]

const content = '<h1>Hello World!</h1>'

const Tiptap = () => {

    const editor = useEditor({
        extensions,
        content,
        injectCSS: false
    })

    return (
        <section className=''>
            {
                editor ? (
                    <>
                        <section className="border border-b-gray-500 bg-gray-100 flex justify-center">
                            <TiptapToolbar editor={editor} />
                        </section>
                        <section className='p-4 sm:px-12 '>
                            <EditorContent className='editor-content ' editor={editor} />
                        </section>
                    </>
                ) : (
                    <div>
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

