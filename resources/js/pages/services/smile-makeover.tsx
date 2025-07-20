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
            <Head title="Smile Makeover in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Full cosmetic plans to enhance your smile’s beauty and confidence." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/smile-makeover" />

                <meta property="og:title" content="Smile Makeover in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Full cosmetic plans to enhance your smile’s beauty and confidence." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/smile-makeover" />
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
                        Smile Makeover in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        A stunning smile may help boost your confidence and how you present yourself to the world. Our smile makeovers combine multiple dental procedures to address your specific concerns, creating natural-looking results that enhance your overall appearance. Whether you’re looking to correct minor imperfections or desire a complete transformation, we’ll create a plan tailored to your goals.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Beginning Your Personally Tailored Journey</h2>
                        <p className="mb-4">
                            Every makeover begins with a complimentary consultation to understand your goals and assess your dental needs. We use advanced 3D scanning technology to create a virtual preview of your potential results, allowing you to visualise your new grin before treatment begins. This technology helps ensure you’re completely confident in your planned results.
                            <br />
                        </p>

                        <p className="mb-4">
                            We begin by taking detailed impressions and photographs of your current look. These are sent to our premium dental laboratory, where skilled technicians create a mockup of your new smile. You can preview and approve the design before any permanent changes are made. Throughout your journey, we ensure your comfort and understanding of each procedure.
                        </p>

                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>

                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Easy and Flexible Solutions</h2>
                        <p className="mb-4">
                            Because every smile is unique, we offer both in-chair whitening for $399 and take-home kits for $299. Our in-chair procedure provides immediate results, while our take-home options offer flexibility and convenience. For special occasions or group sessions, we accommodate up to four people simultaneously with our “More the Merrier” discount packages – perfect for wedding parties or special events.
                        </p>

                    </div>
                    <div className="order-1 md:order-2 col-span-2 max-h-[300px]
                        md:max-h-[600px] w-full
                        flex justify-start items-center
                        overflow-hidden">
                        <img
                            src="/photos/services/happy-lady-pretty-smile-h.jpg"
                            alt="Woman Smiling"
                            className="w-full max-h-[300px] md:max-h-full object-cover"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:px-16 md:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Combining Procedures for Optimal Results</h2>
                    <p className="mb-2">Your makeover may include any combination of these dental solutions:</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Porcelain veneers or crowns
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Professional teeth whitening
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Clear aligners
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Dental implants
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Gum contouring
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Restorative treatments
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Dental bridges
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

