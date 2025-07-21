import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import Footer from '@/components/home-pages/footer';
import ContactUs from "@/components/home-pages/contact-us";

const NavigationBar = lazy( () => import('@/components/ui/nav-bar'))
export default function NewPatient() {

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
            <Head title="New Patient Dental Check-Up & Clean – Just $199 or Gap Free">

                <meta name="description" content="Enjoy a complete dental check-up, X-rays, and professional clean for just $199 or gap free with private health. Includes complimentary spa-like comforts to help you relax." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/new-patients" />

                <meta property="og:title" content=" New Patient Dental Check-Up & Clean – Just $199 or Gap Free - The Dentl Studio" />
                <meta property="og:description" content="Enjoy a complete dental check-up, X-rays, and professional clean for just $199 or gap free with private health. Includes complimentary spa-like comforts to help you relax." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/new-patients" />
                <meta property="og:type" content="website" />
                <link
                    rel="preload"
                    as="image"
                    href="/photos/services/service-cover.webp"
                    fetchPriority="high"
                />
            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header ref={header} className="
                bg-stone-950 text-soft-200 min-h-[70svh] flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between
                p-8 md:p-16 gap-4 relative overflow-hidden
                bg-[url(/photos/services/service-cover.webp)]
                bg-center bg-cover
                ">

                <div className="bg-gradient-to-t from-stone-950 to-transparent absolute top-0 left-0 w-full h-full" />

                <div className="z-10 space-y-2 sm:space-y-4">
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        New Patient Dental Check-Up & Clean – Just $199 or Gap Free
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Includes a thorough examination, X-rays, and a professional clean for a fresh, healthy start.
                        <br/>
                        Enjoy complimentary comforts like hand or head massages, aromatherapy, weighted blankets, and cappuccinos — relax your way, on every visit.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">New Patients at The Dentl Studio</h2>
                        <p className="mb-4">
                            Your first visit to The Dentl Studio is all about you. From the moment you arrive, our beautiful, boutique-style practice offers a serene space designed to help you relax. Enjoy a complimentary beverage as you fill out your forms, then explore our unique comfort menu with weighted blankets, guided meditation, and soothing aromatherapy options. Every detail is tailored to ensure your visit feels indulgent and stress-free.
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/photos/services/dentl-room.jpg"
                            alt="Free Check up in Clyde North"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Comprehensive New Patient Hygiene Visit</h2>
                    <p className="mb-2">
                        Our $199 New Patient Hygiene Visit is designed to provide a thorough introduction to your oral health. This package includes:
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Soft tissue and gum check
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Oral cancer screening
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            X-rays
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Removal of plaque, calculus, and stains
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Fluoride treatment
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Decay prevention and oral hygiene advice
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Free whitening assessment
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Personalised treatment plan
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

