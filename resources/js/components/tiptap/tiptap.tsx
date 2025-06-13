// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Heading1 } from 'lucide-react'
import Heading from '@tiptap/extension-heading'
import TiptapToolbar from './toolbar'
import './styles.css'
// import extensions from './extensions'

const extensions = [StarterKit]

const content = '<h1 >Hello World!</h1>'

const Tiptap = () => {

    const editor = useEditor({
        extensions,
        content,
    })

    return (
        <section className='p-4 sm:px-12 '>
            <TiptapToolbar editor={editor} />
            <EditorContent className='editor-content ' editor={editor} />
            {/* <FloatingMenu editor={editor} >This is the floating menu</FloatingMenu> */}
            {/* <BubbleMenu editor={editor} className='bg-gray-900 text-gray-100'>This is the bubble menu</BubbleMenu> */}
        </section>
    )
}

export default Tiptap

