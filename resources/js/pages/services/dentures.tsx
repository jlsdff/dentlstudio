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
            <Head title="Dentures in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Custom full or partial dentures for comfortable, confident smiles." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/dentures" />

                <meta property="og:title" content="Dentures in Clyde North" />
                <meta property="og:description" content="Custom full or partial dentures for comfortable, confident smiles." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/dentures" />
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
                        Dentures in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        You deserve to smile with greater confidence. If you’re dealing with missing teeth or uncomfortable dentures that fit incorrectly, our high-quality denture solutions can restore both your smile and your quality of life. Missing teeth can affect everything, from your nutrition to your self-esteem—which is precisely why The Dentl Studio offers a comprehensive denture service focused on comfort, aesthetics, and functionality.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">A Dedicated In-House Prosethtist</h2>
                        <p className="mb-4">
                            One of the main aspects of our practice that sets us apart is having a dedicated in-house prosthetist who visits weekly, bringing specialised knowledge exclusively focused on dentures. Unlike general dentists who divide their attention across multiple treatments, our prosthetist has dedicated years to mastering this specific craft.
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
                            src="/photos/services/older-woman-holding-cheeks-smiling-h.jpg"
                            alt="Older woman holding cheeks smiling"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Comprehensive Denture Solutions</h2>
                    <p className="mb-2">We provide a complete range of denture options tailored to your specific needs:</p>

                    <ul className="grid grid-cols-1 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Full mouth dentures for complete tooth replacement
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Partial dentures for replacing several teeth
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Immediate dentures for placement directly after extractions
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Acrylic and chrome dentures for different durability needs
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Flexible dentures for superior comfort
                        </li>
                    </ul>

                </section>
                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

