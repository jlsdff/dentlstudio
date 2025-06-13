import { Toggle } from "@radix-ui/react-toggle"
import { Editor } from "@tiptap/core"
import { Bold, Heading1 } from "lucide-react"
import { PropsWithChildren } from "react"

interface ToolbarProps {
    editor: Editor | null
}


export default function TiptapToolbar({ editor }: ToolbarProps) {

    return (
        <div>
            <Toggle
                className={editor?.isActive('heading') ? 'font-bold' : ""}
                onPressedChange={() => {
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                }}
            >
                <Heading1 />
            </Toggle>
            <Toggle
                className={editor?.isActive('bold') ? 'font-bold' : ""}
                onPressedChange={
                    () => editor?.chain().focus().toggleBold().run()
                }
            >
                <Bold />
            </Toggle>
        </div>
    )
}

