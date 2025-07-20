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
            <Head title="TMJ Treatment in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Customized solutions for jaw pain, stiffness, and TMJ-related discomfort." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/tmj-treatment" />

                <meta property="og:title" content="TMJ Treatment in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Customized solutions for jaw pain, stiffness, and TMJ-related discomfort." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/tmj-treatment" />
                <meta property="og:type" content="website" />

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
                        <Link href={`${route('service')}#general-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            TMJ Treatment
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        TMJ Treatment in Clyde North
                    </h1>

                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Do you experience popping, clicking, jaw soreness, or jaw locking? Or perhaps
                        you deal with frequent headaches or muscle tightness around the face and neck.
                        If this sounds familiar, you may have TMJ (temporomandibular joint) dysfunction.
                        At The Dentl Studio, we offer personalised TMJ treatments designed to relieve muscle
                        tension, ease discomfort, and protect your smile from long-term wear.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What is TMJ Treatment?</h2>
                        <p className="mb-4" >
                            TMJ treatments focus on relaxing the muscles around the jaw joint to ease clenching
                            and grinding. Our registered nurse, trained in cosmetic and muscle-relaxation therapies,
                            provides careful, tailored treatment plans to help reduce strain and restore natural jaw
                            movement. Whether your discomfort is caused by stress, bite issues, or everyday tension, we’ll
                            work with you to find a solution that feels right for you.
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">More Than Just Symptom Relief</h2>
                        <p className="mb-4" >
                            Our approach doesn’t just focus on easing current discomfort. By
                            helping reduce clenching and grinding, TMJ treatment can also help minimise
                            future wear and tear on your teeth, protect your dental work, and support long-term
                            oral health. We’ll guide you every step of the way with clear explanations, compassionate
                            care, and tailored recommendations based on your needs.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/photos/services/woman-grimacing-with-jaw-pain-sq-400.jpg"
                            alt="Woman with jaw pain"
                            className="w-screen"
                        />
                    </div>
                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

