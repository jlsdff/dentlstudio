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
            <Head title="Dental Crowns in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Protect and rebuild damaged teeth with high-quality crowns." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/dental-crowns" />

                <meta property="og:title" content="Dental Crowns in Clyde North" />
                <meta property="og:description" content="Protect and rebuild damaged teeth with high-quality crowns." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/dental-crowns" />
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
                        <Link href={`${route('service')}#restorative-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Restorative Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Dental Crowns in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Whether you’re fixing a cracked tooth, restoring it after root canal therapy, or just want to improve your smile’s appearance, a crown can do more than patch things up; it can bring your tooth back to complete form and function.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Fillings Actually Do</h2>
                        <p className="mb-4">
                            At The Dentl Studio, we craft crowns that blend beautifully into your smile. Each one is colour-matched, shaped, and contoured to feel like part of your real tooth – because it is. And thanks to modern digital scanning and custom design, most people won’t even know which one had work done. They’ll just notice how good your smile looks.
                        </p>
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
                            src="/photos/services/man-talking-with-dental-technician.jpg"
                            alt="Man getting a dental checkup"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Exactly Is a Crown?</h2>
                    <p className="mb-2">
                        A crown is a tooth-shaped cap that fits over a weakened or damaged tooth. This restoration is often recommended when the damaged one can’t hold a regular filling, usually because of deep decay, cracking, or previous dental work. It is also the go-to finish after a root canal to help stabilise the area and prevent future breakage.

                        Most of the ones we place are porcelain, which offers strength and a natural finish. The process takes two visits, but they’re worth it.
                    </p>

                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Makes Us Different</h2>
                    <p className="mb-2">A comfort menu is available that includes noise-cancelling headphones, streaming options like Netflix, hand or head massages, aromatherapy, weighted blankets, cappuccinos, and extra time for nervous patients so you can relax your way.</p>

                    <ul className="grid grid-cols-1 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            No putty impressions—just precise digital scans
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Temporary crown included for comfort and protection
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            High-quality labs and ceramists for a natural, long-lasting finish
                        </li>
                    </ul>

                </section>
                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

