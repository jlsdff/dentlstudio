import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
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
            <Head title="Veneers in Clyde North">

                <meta name="description" content="Transform your smile with custom-designed porcelain veneers." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/veneers" />

                <meta property="og:title" content="Veneers in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Transform your smile with custom-designed porcelain veneers." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/veneers" />
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
                    <div className="flex gap-2 items-center group justify-center sm:justify-start">
                        <ChevronRight size={18} className="-translate-x-[50px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 text-soft-300" />
                        <Link href={`${route('service')}#cosmetic-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Cosmetic Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Veneers in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <PopUp/>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Do you wish you could achieve a stunning smile that lights up the room? At our Clyde North dental practice, porcelain veneers offer a lasting solution for multiple aesthetic concerns, from stains to chips and gaps. Custom-crafted to your unique goals, these tooth covers provide both beauty and function. Our approach focuses on creating results that look and feel entirely natural.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Custom Veneers, Made for You</h2>
                        <p className="mb-4">
                            The process of getting veneers begins with a consultation to discuss your goals and assess your oral health. Before proceeding, we’ll examine your teeth and gums to ensure they’re in good condition. After taking impressions and photos, we work with leading dental laboratories to craft your custom veneers. We’ll also discuss your ideal shade and shape preferences to achieve the most natural-looking results.
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                    </div>
                    <div className="order-1 md:order-2 col-span-2">
                        <img
                            src="/photos/services/screening.jpg"
                            alt=""
                            className="w-full"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:px-16 md:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Our Porcelain Shells Are a Great Option</h2>
                    <p className="mb-2">Porcelain veneers are thin, durable shells bonded to the front of your tooth to create a naturally beautiful smile. They can address teeth issues like: </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Stained or discolouration
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Chipped or worn down teeth
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Gaps
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Misalignments
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Irregularly shaped teeth
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Uneven tooth lengths
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Small cracks in tooth enamel
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

