import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import Footer from '@/components/home-pages/footer';
import ContactUs from "@/components/home-pages/contact-us";

const PopUp = lazy(() => import('@/components/ui/PopUp'))
const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

export default function EmergencyDentistry() {

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
    }, [])

    return (
        <>
            <Head title="Frown Line Treatment – Smooth Glabellar Lines">

                <meta name="description" content=" Say goodbye to angry-looking frown lines with targeted injectables that relax and smooth your brow for a refreshed appearance." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/frown-lines" />

                <meta property="og:title" content=" Frown Line Treatment – Smooth Glabellar Lines | The Dentl Studio" />
                <meta property="og:description" content=" Say goodbye to angry-looking frown lines with targeted injectables that relax and smooth your brow for a refreshed appearance." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/frown-lines" />
                <meta property="og:type" content="website" />
                <link
                    rel="preload"
                    as="image"
                    href="/injectables-ad.webm"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/frosted.jpg"
                    fetchPriority="high"
                />
            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header ref={header} className="
                 text-soft-200 h-[100svh]
                grid grid-cols-1 md:grid-cols-8
                ">

                <div className="hidden md:flex md:col-span-5 p-8 sm:p-16 flex-col justify-end gap-4 relative
                    bg-gradient-to-tr from-stone-950 to-stone-800">

                    <h1 className="text-4xl md:text-5xl font-serif z-10"> Frown Line Treatment</h1>
                    <p className="z-10">
                        Smooth out deep brow furrows with precision injectables designed to soften frown lines and restore a calm, approachable expression.
                    </p>
                    <div className="z-10">
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`px-4 py-2 text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                    </div>
                    <img src="/frosted.jpg" className="absolute w-full h-full object-cover top-0 left-0 mix-blend-multiply
                        z-0" alt="frosted texture" aria-hidden />

                </div>

                <div className="md:col-span-3 overflow-y-hidden relative">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/thedentlstudio.jpg"
                        preload="metadata"
                        aria-hidden="true"
                    >
                        <source src="/injectables-ad.webm" type="video/webm" />
                    </video>
                    <div className="absolute inset-0 w-full h-full flex md:hidden flex-col items-center justify-end p-8
                        text-center gap-4 bg-gradient-to-t from-stone-950 to-transparent">
                        <h1 className="text-4xl md:text-5xl font-serif z-10"> Frown Line Treatment</h1>
                        <p className="z-10">
                            Smooth out deep brow furrows with precision injectables designed to soften frown lines and restore a calm, approachable expression.
                        </p>
                        <div className="z-10">
                            <a
                                aria-label="Book an appointment at The Dentl Studio"
                                className={`px-4 py-2 text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                                href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                                target="_blank"
                            >
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                </div>

            </header>

            <main>

                <PopUp />

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">What is the treatment?</h2>
                        <p className="text-base">
                            Frown line treatment involves the use of anti-wrinkle injections to target the muscles between the eyebrows—often called “11s”—that cause deep vertical creases when frowning.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Who is it for?</h2>
                        <p className="text-base">
                            This treatment is perfect for individuals who notice permanent or dynamic lines between the brows, giving them an unintentionally tense, angry, or tired look.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">How it works:</h2>
                        <p className="text-base">
                            A small dose of wrinkle relaxant is injected into the glabellar area to temporarily reduce muscle movement. This allows the overlying skin to relax and smooth out, reducing visible lines.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Expected results:</h2>
                        <p className="text-base">
                            Expect a softer, more relaxed brow with diminished or eliminated frown lines. Visible improvements usually appear within 3–7 days and last approximately 3–4 months.
                        </p>
                    </div>
                </section>



                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Benefits</h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Smooths deep vertical lines between the eyebrows
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Creates a more relaxed and youthful expression
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Prevents lines from becoming more pronounced
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Quick treatment with minimal discomfort
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Non-surgical solution with no downtime
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Results look natural and balanced
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

