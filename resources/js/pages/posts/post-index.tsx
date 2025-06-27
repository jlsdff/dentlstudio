import PostCard from "@/components/posts/post-card";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Paginate, Post } from "@/types";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Pen } from "lucide-react";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { SharedData } from "@/types";
import PostFilters from "@/components/posts/post-filters";
import { Button } from "@/components/ui/button";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs posts',
        href: "/post/index"
    },
]

interface PostFilters {
    status?: string | null;
    search?: string | null;
    orderBy?: string | null;
}

interface PostsProps {
    posts: Paginate<Post>;
    filters: PostFilters;
}

export default function Posts({ posts }: PostsProps) {

    const { flash } = usePage<SharedData>().props

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.message)
        }
    }, [flash])

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Toaster />
            <Head title="Posts" />
            <section className="flex px-4 py-4 justify-between items-center">
                <Link href={route('post.index')} prefetch className="hover:underline">
                    <h2>Blog Posts</h2>
                </Link>
                <div>
                    <Link href="/post/create" className="flex gap-2 items-center" >
                        <Pen size={16} /> <span className="text-xs">Write New</span>
                    </Link>
                </div>
            </section>
            <section className="px-4 py-2">
                <PostFilters />
            </section>
            <div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    posts.data.length === 0 && <p className="text-center col-span-3 font-semibold">No blog post written yet.</p>
                }
                {
                    posts.data.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div>

            <div className="flex justify-center gap-4 py-6">
                {posts.prev_page_url && (
                    <Button variant="outline" asChild>
                        <Link href={posts.prev_page_url} prefetch preserveState preserveScroll>Previous</Link>
                    </Button>
                )}
                {posts.next_page_url && (
                    <Button asChild>
                        <Link href={posts.next_page_url} prefetch preserveState preserveScroll>Next</Link>
                    </Button>
                )}
            </div>

        </AppLayout>
    )
}

