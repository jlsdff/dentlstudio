import { Head, Link, WhenVisible } from "@inertiajs/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useEffect, useRef, useState, lazy } from "react";
import Footer from '@/components/home-pages/footer';
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import 'react-photo-view/dist/react-photo-view.css';

const PopUp = lazy(() => import('@/components/ui/PopUp'))
const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

export default function AboutUs() {

    const [scrolledPastHeader, setScrolledPastHeader] = useState(false)
    const header = useRef<HTMLHeadElement>(null)

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
            <Head title="Gallery">

                <meta name="description" content="Take a visual tour of The Dentl Studio in Clyde North. Explore our state-of-the-art clinic, calming interiors, and luxurious patient experience." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/gallery" />

                <meta property="og:title" content="Gallery | Step Inside The Dentl Studio – Clyde North Dental Clinic" />
                <meta property="og:description" content="Take a visual tour of The Dentl Studio in Clyde North. Explore our state-of-the-art clinic, calming interiors, and luxurious patient experience." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/gallery" />
                <meta property="og:type" content="website" />

                <link
                    rel="preload"
                    as="image"
                    href="/our-space/our-space-8.webp"
                    fetchPriority="high"
                />

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
                <h1 className="mt-12 md:mt-0  text-center text-4xl sm:text-5xl font-light font-serif tracking-widest" >
                    See Inside The Dentl Studio
                </h1>
                <p className="text-center">
                    Experience the calming, spa-like atmosphere of our clinic before you visit. From modern treatment rooms to our relaxing lounge, every detail is designed to make you feel at ease.
                </p>
            </header>

            <main className="bg-soft-200 p-8 md:p-16">

                <PopUp />


                <GalleryTabs />

            </main>

            <Footer />

        </>
    )
}

function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}


function GalleryTabs() {

    return (
        <div>
            <Tabs defaultValue="our-place">
                <TabsList className="w-full flex justify-center items-center bg-transparent">
                    <TabsTrigger
                        className=" data-[state=active]:bg-stone-950 data-[state=active]:text-soft-200 "
                        value="our-place" >
                        Our Place
                    </TabsTrigger>
                    <TabsTrigger
                        className=" data-[state=active]:bg-stone-950 data-[state=active]:text-soft-200 "
                        value="launch-party" >
                        Launch Party
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value='our-place'>
                    <PhotoProvider>
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
                            {
                                range(1, 20).map((val) => (
                                    <PhotoView key={val + 17287491823} src={`/our-space/our-space-${val}.webp`}>
                                        <img
                                            className="w-full mb-2 rounded-xl"
                                            src={`/our-space/our-space-${val}.webp`} loading="lazy" decoding="async" alt="Inside of the dentl studio" />
                                    </PhotoView>
                                ))
                            }
                        </div>
                    </PhotoProvider>
                </TabsContent>
                <TabsContent value='launch-party'>
                    <PhotoProvider>
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
                            {
                                range(1, 11).map((val) => (
                                    <PhotoView key={val + 12973} src={`/launch-party/launch-party-${val}.webp`}>
                                        <img
                                            className="w-full mb-2 rounded-xl"
                                            src={`/launch-party/launch-party-${val}.webp`} loading="lazy" decoding="async" alt="Inside of the dentl studio" />
                                    </PhotoView>
                                ))
                            }
                        </div>
                    </PhotoProvider>
                </TabsContent>
            </Tabs>
        </div>
    )
}
