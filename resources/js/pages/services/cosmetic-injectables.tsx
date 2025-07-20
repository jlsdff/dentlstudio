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
            <Head title="Cosmetic Injectables in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Subtle facial enhancements for a youthful, natural look." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/cosmetic-injectables" />

                <meta property="og:title" content="Cosmetic Injectables in Clyde North" />
                <meta property="og:description" content="Subtle facial enhancements for a youthful, natural look." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/cosmetic-injectables" />
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
                        <Link href={`${route('service')}#cosmetic-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Cosmetic Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Cosmetic Injectables in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        At The Dentl Studio, cosmetic treatments don’t feel clinical or intimidating. They feel calming, intentional, and uniquely tailored to you. While restoring your oral health and reviving confidence in your smile are our top priorities, we also offer other services to help you look and feel your best. Whether you’re seeking to soften lines, refresh tired skin, or restore subtle volume, our approach is about balance, not extremes.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">A Thoughtful Approach to Aesthetic Enhancement</h2>
                        <p className="mb-4">
                            Our registered nurse performs every cosmetic treatment using medical-grade products. She takes the time to understand your facial structure, goals, and preferences so the results feel harmonious, not overdone.
                        </p>

                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>

                    </div>
                    <div className="order-1 md:order-2 col-span-2 max-h-[300px]
                        md:max-h-[600px] w-full
                        flex justify-start items-center
                        overflow-hidden">
                        <img
                            src="/photos/services/cosmetic-injectables.jpg"
                            alt="Cosmetic Injectables in Clyde North"
                            className="w-full max-h-[300px] md:max-h-full object-cover"
                        />
                    </div>

                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">We offer several options</h2>

                    <div>
                        <h3 className="flex gap-2 items-center">
                            <ChevronRight size={18} />
                            Wrinkle Reduction Injections
                        </h3>

                        <ul className="space-y-2 mt-4">
                            <li>
                                <span className="font-semibold">- Upper face:</span> Forehead creases, frown lines, crow’s feet, brow lift, bunny lines
                            </li>
                            <li>
                                <span className="font-semibold">- Lower face:</span> Lip flip, gummy smile, upper lip lines, downward smile, dimpled chin, neck lift, jaw slimming
                            </li>
                            <li>
                                <span className="font-semibold">- Other concerns:</span> Hyperhidrosis (excessive sweating)
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="flex mt-4 gap-2 items-center">
                            <ChevronRight size={18} />
                            Facial Volume Treatments
                        </h3>
                        <ul className="space-y-2 mt-4">
                            <li>
                                <span className="font-semibold">- Lip enhancement</span>
                            </li>
                            <li>
                                <span className="font-semibold">- Cheek contouring</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="flex mt-4 gap-2 items-center">
                            <ChevronRight size={18} />
                            Skin Treatments
                        </h3>
                        <ul className="space-y-2 mt-4">
                            <li>
                                <span className="font-semibold">- Skin Boosters</span>
                            </li>
                            <li>
                                <span className="font-semibold">- Rejuran</span>
                            </li>
                        </ul>
                    </div>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

