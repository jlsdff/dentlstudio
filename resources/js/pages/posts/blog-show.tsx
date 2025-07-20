import { Separator } from "@/components/ui/separator";
import { extensions } from "@/hooks/use-editor";
import { Post } from "@/types"
import { Head, Link } from "@inertiajs/react";
import { generateHTML } from "@tiptap/html";
import { format } from "date-fns";
import { lazy, useEffect, useRef } from 'react';
import Footer from '@/components/home-pages/footer';
import { Dot } from 'lucide-react';

const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

interface BlogProps {
    blog: Post;
    relatedPosts: Post[];
    [key: string]: unknown;
}

function estimateReadingTime(text: string, wordsPerMinute = 183): string {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
}

export default function Blog(props: BlogProps) {

    const { blog, relatedPosts } = props;
    const articleContent = generateHTML(JSON.parse(blog.content), extensions);
    const readingTime = estimateReadingTime(articleContent);


    return (
        <>
            <Head>

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content={blog.description} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://thedentlstudio.com/${blog.slug}`} />

                <meta property="og:title" content={`${blog.title} - The Dentl Studio`} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:image" content={`https://thedentlstudio.com/${blog.cover_image}`} />
                <meta property="og:url" content={`https://thedentlstudio.com/${blog.slug}`} />
                <meta property="og:type" content="website" />

            </Head>

            <NavigationBar scrolled={true} />

            <main className="p-8 pt-[100px] md:p-16 md:pt-[150px]   bg-soft-200
            grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-stone-900
        ">

                <Head title={blog.title} />

                <article className="blogpost editor-content max-w-4xl md:col-span-4">
                    <div>
                        <p className="flex items-center text-stone-600">
                            <span>{readingTime} min read</span>
                            <Dot size={18} />
                            <span>Published on {format(new Date(blog.published_at || ""), "PPP")}</span>
                        </p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: articleContent }} />
                </article>


                <section className="md:col-span-2">
                    <RelatedPost relatedPosts={relatedPosts} />
                </section>

            </main>
            <Footer />
        </>

    )
}

function RelatedPost({ relatedPosts }: { relatedPosts: Post[] }) {
    console.log("related post: ", relatedPosts)
    return (
        <>
            {
                relatedPosts && (
                    <div className="sticky top-[120px]">
                        <h3 className="text-lg font-semibold mb-4">Related Blogs</h3>

                        <div className="space-y-2">
                            {
                                relatedPosts.map(post => (
                                    <Link
                                        href={route('blogs.show', { slug: post.slug })}
                                        className="flex gap-2 items-start group"
                                        key={post.id}>
                                        <div className="flex items-center">
                                            <img
                                                className="max-w-[100px] aspect-video object-contain"
                                                src={post.cover_image}
                                                alt={post.description} />
                                        </div>
                                        <div className="">
                                            <h4 className="text-base group-hover:underline ">{post.title}</h4>
                                            <p className="line-clamp-2 text-xs">{post.description}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

