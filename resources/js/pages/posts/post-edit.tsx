import TiptapEdit from "@/components/tiptap/tiptap-edit";
import { Post } from "@/types";
import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

interface PostEditProps {
    post: Post;
}

export default function PostEdit({ post }: PostEditProps) {

    return (
        <main>
            <Head title={post.title} />
            <TiptapEdit post={post} />
            <Toaster />
        </main>
    )
}

