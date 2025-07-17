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
            <Head title="Sports Mouthguards in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Custom-fit mouthguards to protect your teeth during sports and physical activity." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/sports-mouthguard" />

                <meta property="og:title" content="Sports Mouthguards in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Custom-fit mouthguards to protect your teeth during sports and physical activity." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/checkup-and-cleans" />
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
                        Sports Mouthguards in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        If you’re athletic, or have a child involved in contact sports, chances are you know all too well the dangers and seriousness that a mouth injury entails.

                        Thankfully, we’re proud to offer custom-fit mouthguards to help keep your smile safe during activities. The best part? Getting your mouthguard has never been easier.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Why Choose a Mouthguard?</h2>
                        <p className="mb-4">
                            Mouthguards protect your teeth from being cracked, knocked out, and chipped. They can also help prevent cuts and lacerations as well as jaw injuries.
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
                    <div className="order-1 md:order-2 col-span-2">
                        <img
                            src="/photos/services/girls-rugby.jpg"
                            alt="Two girls holding a rugby ball"
                            className="w-full"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">At The Dentl Studio, our custom mouthguards are designed to:</h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Allow speaking and does not limit breathing
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Stay firmly in place during action.
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Provide a high degree of comfort and fit.
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Be durable, easy to clean, odorless and tasteless.
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

