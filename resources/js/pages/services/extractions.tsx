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
            <Head title="Extractions in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Safe removal of damaged or decayed teeth." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/extractions" />

                <meta property="og:title" content="Extractions in Clyde North" />
                <meta property="og:description" content="Safe removal of damaged or decayed teeth." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/extractions" />
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
                        <Link href={`${route('service')}#oral-surgery`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Oral Surgery
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Extractions in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Need a tooth removed? We provide safe, gentle extractions with minimal discomfort. Whether it’s decay, damage, or overcrowding, our experienced team ensures a smooth, stress-free experience in a calming, modern clinic environment.
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

                        <h2 className="mt-5 text-xl sm:text-2xl mb-4 font-semibold ">Comprehensive Denture Solutions</h2>
                        <p className="mb-2">We provide a complete range of denture options tailored to your specific needs:</p>

                        <ul className="grid grid-cols-1 gap-2 ">
                            <li className="flex items-center gap-2">
                                <ChevronRight size={18} />
                                Trauma to the tooth
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight size={18} />
                                Tooth decay
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight size={18} />
                                Infection
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight size={18} />
                                Wisdom teeth
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight size={18} />
                                Periodontal disease
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/photos/services/tooth-exam.jpg"
                            alt="Tooth Exam"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 md:pt-1 tracking-widest" >

                    <h2 className="mt-4 text-xl sm:text-2xl mb-4 font-semibold "> Healing and Home Care</h2>
                    <p className="mb-4">
                        Home care for an extraction can involve taking over-the-counter pain medications to help with any tenderness in the days following the procedure and should be taken before the anesthesia wears off. More complex extractions may involve additional prescriptions recommended by your dentist.

                        When it comes to eating, we recommend soft, cold foods for the few days after the extraction. Try to avoid using straws as the sucking motion can complicate the healing process.

                        You should clean and brush your teeth as usual; changing your gauze pads often and a warm, salt water rinse 24 hours after the procedure to keep the area clean. Smoking should be refrained from for 24-72 hours.

                        If you notice any swelling, ice packs may help reduce it. There can also be stitches involved in more complex extractions, usually self-dissolving stitches.

                        It’s extremely important to follow after-care directions to prevent any complications. For example, the blood clot that forms after extraction can become dislodged and leave the hole exposed. This situation, called dry socket, can cause an infection so we strongly recommend taking it easy to ensure you heal properly.
                    </p>
                </section>
                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

