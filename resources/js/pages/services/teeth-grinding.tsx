import { NavigationBar } from "@/components/ui/nav-bar";
import { Head } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Footer } from "../welcome";
import ContactUs from "@/components/home-pages/contact-us";

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
            <Head title="Teeth Grinding Solutions in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Relieve jaw tension and protect your teeth from the effects of grinding and clenching." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/teeth-grinding" />

                <meta property="og:title" content=" Teeth Grinding Solutions in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Relieve jaw tension and protect your teeth from the effects of grinding and clenching." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/teeth-grinding" />
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
                            General Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Teeth Grinding Solution in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        People with jaw pain grinding or clenching your teeth—whether while sleeping
                        or during the day—can cause more than just sore jaws. Often linked to stress, sleep
                        disturbances, or bite misalignment, teeth grinding can lead to headaches, muscle tightness,
                        worn teeth, and even broken dental work over time. Our team at The Dentl Studio offers tailored
                        solutions to help protect your smile and alleviate discomfort before bigger (and often costlier)
                        problems arise.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Personalised Protection, No Messy Impressions</h2>
                        <p className="mb-4" >
                            For many patients, a custom-fitted night guard or splint is an effective way to reduce the strain from grinding. Thanks to our advanced 3D scanner, there’s no need for messy impressions or gag-inducing moulds. What a relief! A quick and comfortable scan sends your specifications directly to our trusted lab, with your device typically ready within 7-10 business days. It’s simple, efficient, and designed to fit seamlessly into your busy life.
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Considering TMJ Treatment</h2>
                        <p className="mb-4" >
                            For patients seeking a different approach, we also offer TMJ (temporomandibular joint) treatments to help relax overactive muscles. TMJ therapy may ease the clenching that often leads to teeth grinding, offering a dual benefit of comfort and protection. During your consultation, we’ll talk you through all options to find the best path forward based on your needs and preferences.
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

