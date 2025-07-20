import { CursorPaginate, Post } from "@/types"
import { Link } from "@inertiajs/react";
import { useRef, useEffect, useState, lazy } from 'react';
import { Head } from '@inertiajs/react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollToPlugin from 'gsap/src/ScrollToPlugin';
import Footer from '@/components/home-pages/footer';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { format } from 'date-fns';
import { generateHTML } from '@tiptap/html';
import { extensions } from "@/hooks/use-editor";
import { Badge } from '@/components/ui/badge';

const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

interface BlogPostsProps {
    blogs: CursorPaginate<Post>;
}

gsap.registerPlugin(useGSAP, TextPlugin, ExpoScaleEase, ScrollTrigger, ScrollToPlugin);

export default function BlogIndex({ blogs }: BlogPostsProps) {

    console.log('blogs: ', blogs)

    const header = useRef<HTMLHeadElement>(null)

    const [scrolledPastHeader, setScrolledPastHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                const headerHeight = header.current.offsetHeight / 6;
                setScrolledPastHeader(window.scrollY >= headerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Insights, News & Dental Care Tips from The Dentl Studio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Discover expert advice, oral health tips, and the latest updates from our Clyde North dental team — curated to help you care for your smile every day." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/blogs" />

                <meta property="og:title" content="Insights, News & Dental Care Tips from The Dentl Studio" />
                <meta property="og:description" content="Discover expert advice, oral health tips, and the latest updates from our Clyde North dental team — curated to help you care for your smile every day." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/blogs" />
                <meta property="og:type" content="website" />
            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header
                ref={header}
                className="
                bg-stone-950 text-soft-200 min-h-[50svh]
                flex flex-col justify-end items-center
                p-8 md:pt-18 gap-4 relative overflow-hidden
                "
            >
                <h1 className="  text-center sm:text-left text-2xl md:text-4xl font-light font-serif tracking-widest" >
                    Insights, News & Dental Care Tips from The Dentl Studio
                </h1>
                <p>
                    Discover expert advice, oral health tips, and the latest updates from our Clyde North dental team — curated to help you care for your smile every day.
                </p>
            </header>
            <main >

                <section className="min-h-[90svh] text-stone-950 bg-soft-200 p-8 md:p-16
                     tracking-widest">

                    <div className="space-y-2 mb-8">
                        <h2 className="text-2xl font-semibold" >Our blogs</h2>
                        <p>
                            At The Dentl Studio, we believe that education is key to confident smiles. Our blog is your trusted source for practical dental care tips, treatment insights, and the latest news from our clinic. Whether you're looking to understand a procedure or improve your at-home routine, our articles are here to guide and empower you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
                        {
                            blogs.data.map(post => (
                                <BlogCard post={post} key={post.id} />
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4">
                        {
                            blogs.prev_page_url && (
                                <Link
                                    className="rounded-lg px-5 py-2 bg-stone-800 text-soft-200 flex gap-2 items-center"
                                    href={blogs.prev_page_url} >
                                    <ChevronLeft size={18} />
                                    Previous
                                </Link>
                            )
                        }
                        {
                            blogs.next_page_url && (
                                <Link
                                    className="rounded-lg px-5 py-2 bg-stone-800 text-soft-200 flex gap-2 items-center"
                                    href={blogs.next_page_url}>
                                    Next
                                    <ChevronRight size={18} />
                                </Link>
                            )
                        }

                    </div>


                </section>

            </main >
            <Footer />
        </>
    )
}

function estimateReadingTime(text: string, wordsPerMinute = 183): string {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
}

export function BlogCard({ post }: { post: Post }) {

    const readingTime = estimateReadingTime(
        generateHTML(JSON.parse(post.content), extensions)
    )

    return (
        <Link
            href={route('blogs.show', { slug: post.slug })}
            className="flex flex-col text-stone-800  md:justify-start md:items-start  group "
        >

            <div>
                <img
                    className="w-full aspect-video object-cover rounded-t-xl "
                    src={post.cover_image}
                    alt={post.title} />
            </div>

            <div className="p-3 group-hover:bg-soft-300 rounded-b-xl h-full w-full">

                {
                    post.published_at && (
                        <p className="text-xs flex items-center text-stone-500" >
                            {readingTime} min read
                            <Dot />
                            {format(new Date(post.published_at), 'PPP')}
                        </p>
                    )
                }

                <div>
                    {
                        post.tags && (
                            <div className="flex flex-wrap gap-2">
                                {
                                    post.tags.map(tag => (
                                        <Badge
                                            key={tag.id}
                                            className=" text-xs text-stone-200"
                                        >{tag.name}</Badge>
                                    ))}
                            </div>
                        )
                    }
                </div>
                <h3 className="text-lg mt-2 font-semibold">{post.title}</h3>
                <p className="line-clamp-3 text-sm">
                    {post.description}
                </p>

            </div>
        </Link>
    )
}
