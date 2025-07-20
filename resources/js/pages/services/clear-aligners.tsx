import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import Footer from '@/components/home-pages/footer';
import ContactUs from "@/components/home-pages/contact-us";

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
            <Head title="Clear Aligners in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Straighten your teeth discreetly with nearly invisible aligners." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/clear-aligners" />

                <meta property="og:title" content="Clear Aligners in Clyde North" />
                <meta property="og:description" content="Straighten your teeth discreetly with nearly invisible aligners." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/clear-aligners" />
                <meta property="og:type" content="website" />
                <link
                    rel="preload"
                    as="image"
                    href="/photos/services/service-cover.jpg"
                    fetchPriority="high"
                />

            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header ref={header} className="
                bg-stone-950 text-soft-200 min-h-[70svh] flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between
                p-8 md:p-16 gap-4 relative overflow-hidden
                bg-[url(/photos/services/service-cover.jpg)]
                bg-center bg-cover
                ">

                <div className="bg-gradient-to-t from-stone-950 to-transparent absolute top-0 left-0 w-full h-full" />

                <div className="z-10 space-y-2 sm:space-y-4">
                    <div className="flex gap-2 items-center group justify-center sm:justify-start">
                        <ChevronRight size={18} className="-translate-x-[50px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 text-soft-300" />
                        <Link href={`${route('service')}#cosmetic-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Cosmetic Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Clear Aligners in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Want to straighten your smile without the look of conspicuous metal braces? You can with our advanced clear aligner system. These custom-made, transparent aligners gradually move your teeth into their ideal position while remaining virtually invisible to others. They are perfect for adults and teenagers seeking a more discreet orthodontic option.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Following the Clear Aligner Process</h2>
                        <p className="mb-4">
                            Beginning with a complimentary consultation, we’ll assess your smile needs using state-of-the-art 3D scanning technology. This virtual scan allows us to create a precise treatment plan and show you how your smile will look at each stage of the process with no messy impressions needed.
                            <br />
                            After your scan and treatment planning, we create your custom aligners using advanced digital technology. You’ll wear each set for approximately two weeks before progressing to the next. Regular check-ups every six to eight weeks ensure your treatment stays on track, with most patients completing their journey within six to eighteen months.                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/photos/services/closeup-aligner-with-woman-behind.jpg"
                            alt="Check up and Cleans in Clyde North"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Timing Out Your Options</h2>
                    <p className="mb-2">Your clear aligner program will typically fall into one of these categories based on your needs:</p>

                    <ul className="grid grid-cols-1 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            <span className="font-semibold">Lite</span> – Minor adjustments (3-6 months)
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            <span className="font-semibold">Standard</span> – Moderate alignment (6-12 months)
                        </li>

                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            <span className="font-semibold">Complex</span> – Significant corrections (12-18 months)
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main >

        </>
    )
}

