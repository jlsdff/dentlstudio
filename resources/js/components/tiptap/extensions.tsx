import Heading from "@tiptap/extension-heading";
import { Bold } from "lucide-react";


const extensions = [
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {
            class: "font-bold font-xl"
        }
    }),

]

export default extensions;
