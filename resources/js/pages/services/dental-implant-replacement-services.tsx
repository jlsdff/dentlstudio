import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import ContactUs from "@/components/home-pages/contact-us";
import Footer from '@/components/home-pages/footer';

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
            <Head title="Expert Dental Implant Replacement Services at
                The Dentl Studio">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Replace failing or missing implants with precision and care." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/dental-implant-replacement-services" />

                <meta property="og:title" content="Expert Dental Implant Replacement Services at
                The Dentl Studio" />
                <meta property="og:description" content="Replace failing or missing implants with precision and care." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/dental-implant-replacement-services" />
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
                        <Link href={`${route('service')}#oral-surgery`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Oral Surgery
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Expert Dental Implant Replacement Services at
                        The Dentl Studio
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        We understand that dental implants can sometimes need replacement or revision, whether due to wear and tear, aesthetic concerns, or other factors. Our dedicated team is committed to providing top-tier implant replacement services to ensure your smile remains beautiful, functional, and healthy.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Why Choose Us for Implant Replacement?</h2>

                        <div>
                            <p className="mb-4">
                                <span className="font-semibold">Experience:</span>
                                Our skilled dental professionals have extensive experience in implant dentistry, including the nuanced process of implant replacement.
                            </p>
                            <p className="mb-4">
                                <span className="font-semibold">Advanced Technology:</span>
                                We utilize state-of-the-art diagnostic and treatment technologies to ensure precise and effective implant replacement.
                            </p>
                            <p className="mb-4">
                                <span className="font-semibold">Personalised Care:</span>
                                Every patient’s situation is unique, and we offer customized treatment plans tailored to your specific needs and goals.
                            </p>
                        </div>

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
                            src="/photos/services/dental-replacement.png"
                            alt="Dental Replacement"
                            className="w-screen"
                        />
                    </div>

                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 md:pt-1 tracking-widest" >

                    <h2 className="mt-4 text-xl sm:text-2xl mb-4 font-semibold ">Restore Your Smile with Confidence</h2>
                    <p className="mb-4">
                        If you’re experiencing issues with an existing dental implant or simply seeking to improve its appearance or function, our team at The Dentl Studio is here to help. Contact us today to schedule a consultation and learn more about our implant replacement services.
                    </p>
                </section>
                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

