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

    const title = " Lip Flip"
    const description = " Get a naturally fuller-looking upper lip without filler. Our Lip Flip treatment enhances your smile in just minutes—no downtime required."

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
            <Head title=" Lip Flip Treatment in Clyde North">

                <meta name="description" content=" Enhance your smile subtly with a non-surgical Lip Flip. Achieve a fuller-looking upper lip using anti-wrinkle injections." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/lip-flip" />

                <meta property="og:title" content=" Lip Flip Treatment in Clyde North | The Dentl Studio" />
                <meta property="og:description" content=" Enhance your smile subtly with a non-surgical Lip Flip. Achieve a fuller-looking upper lip using anti-wrinkle injections." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/lip-flip" />
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
                            A Lip Flip is a non-surgical cosmetic procedure that uses anti-wrinkle injections (usually botulinum toxin) to relax the muscles around the upper lip. This causes the lip to gently roll outward, giving the appearance of a fuller, more defined shape.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Who is it for?</h2>
                        <p className="text-base">
                            Perfect for individuals who want a subtle enhancement to their upper lip, especially those whose lips disappear when they smile or who want a more delicate result than dermal fillers provide.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">How it works:</h2>
                        <p className="text-base">
                            Tiny amounts of anti-wrinkle solution are injected into specific muscles above the upper lip. This relaxes the area, allowing the lip to flip slightly outward. The procedure takes only a few minutes and requires no downtime.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-soft-300 bg-gradient-to-tr from-soft-200 to-soft-300 shadow-md">
                        <h2 className="text-lg md:text-xl font-semibold ">Expected results:</h2>
                        <p className="text-base">
                            You’ll start noticing results in 3–5 days, with full effect visible at around 10 days. The Lip Flip lasts about 6–8 weeks and can be repeated to maintain results.
                        </p>
                    </div>
                </section>



                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Benefits</h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Subtle, natural-looking lip enhancement
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            No fillers or added volume
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Quick, virtually painless treatment
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            No recovery time needed
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Enhances the shape and visibility of the upper lip
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Softens a "gummy" smile
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

