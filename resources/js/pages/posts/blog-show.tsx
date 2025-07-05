import { Separator } from "@/components/ui/separator";
import { extensions } from "@/hooks/use-editor";
import { Post } from "@/types"
import { Head } from "@inertiajs/react";
import { generateHTML } from "@tiptap/html";
import { format } from "date-fns";
import { useEffect, useRef } from "react";

interface BlogProps {
    blog: Post;
    [key: string]: unknown;
}

function estimateReadingTime(text: string, wordsPerMinute = 183): string {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
}

export default function Blog(props: BlogProps) {

    const { blog } = props;
    const articleContent = generateHTML(JSON.parse(blog.content), extensions);
    const readingTime = estimateReadingTime(articleContent);


    return (
        <main className="p-16">
            <Head title={blog.title} />
            <article className="blogpost editor-content max-w-4xl">
                <div className="flex items-center">
                    <span>{readingTime} min read</span>
                    <Separator orientation="vertical" className="h-4  mx-2" />
                    <span>Published on {format(new Date(blog.published_at || ""), "PPP")}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: articleContent }} />
            </article>

        </main>
    )
}

