import { CursorPaginate, Post } from "@/types"
import { Link } from "@inertiajs/react";

interface BlogPostsProps {
    blogs: CursorPaginate<Post>;
}

export default function BlogPosts({ blogs }: BlogPostsProps) {

    console.log(blogs)

    return (
        <section className="flex flex-col gap-4 p-16" >
            {
                blogs.data.map(blog => (
                    <Link href={`/blog/${blog.slug}`} className="w-full flex flex-col gap-2 outline p-4 rounded-md">
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                    </Link>
                ))
            }
        </section>
    )
}

