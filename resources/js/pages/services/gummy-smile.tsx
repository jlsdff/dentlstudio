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

    const title = " Gummy Smile"
    const description = " Achieve a more balanced and confident smile by gently relaxing overactive upper lip muscles—no surgery, just subtle precision."

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
            <Head title=" Gummy Smile Treatment in Clyde North">

                <meta name="description" content=" Reduce excessive gum display and enhance your smile with a quick, non-surgical Gummy Smile treatment using anti-wrinkle injections." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/gummy-smile" />

                <meta property="og:title" content=" Gummy Smile Treatment in Clyde North | The Dentl Studio" />
                <meta property="og:description" content=" Reduce excessive gum display and enhance your smile with a quick, non-surgical Gummy Smile treatment using anti-wrinkle injections." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/gummy-smile" />
                <meta property="og:type" content="website" />
                <link
                    rel="preload"
                    as="image"
                    href="/injectables-ad.webm"
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

                    <h1 className="text-4xl md:text-5xl font-serif z-10">{title}</h1>
                    <p className="z-10">
                        {description}
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
                        <h1 className="text-4xl md:text-5xl font-serif z-10">{title}</h1>
                        <p className="z-10">
                            {description}
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
                            Gummy Smile treatment uses anti-wrinkle injections to relax the muscles that cause the upper lip to rise too high when smiling, exposing more gum than desired. This simple procedure reduces gum visibility and creates a more harmonious smile.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Who is it for?</h2>
                        <p className="text-base">
                            Ideal for individuals who feel self-conscious about a smile that shows excessive gum tissue and are looking for a non-invasive, quick solution.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">How it works:</h2>
                        <p className="text-base">
                            A small amount of anti-wrinkle product is injected into the upper lip elevator muscles. This limits the upward pull of the lip when smiling, keeping it at a more natural height.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Expected results:</h2>
                        <p className="text-base">
                            You can expect results within 3–5 days, with full effect in about 1–2 weeks. The result is a more balanced smile that shows less gum. Effects typically last 3–4 months.
                        </p>
                    </div>
                </section>



                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Benefits</h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Reduces the appearance of excessive gums
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Non-surgical and fast treatment
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Enhances smile balance and proportion
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Boosts confidence in photos and conversation
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            No downtime or recovery needed
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Subtle, natural-looking improvement
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

