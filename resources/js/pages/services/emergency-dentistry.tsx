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
            <Head title="Emergency Dentistry in Clyde North">

                <meta name="description" content="Immediate care for toothaches, injuries, or urgent dental issues—available when your smile needs it most." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/emergency-dentistry" />

                <meta property="og:title" content=" Emergency Dentistry in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Immediate care for toothaches, injuries, or urgent dental issues—available when your smile needs it most." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/emergency-dentistry" />
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
                        <Link href={`${route('service')}#general-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            General Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Emergency Dentistry in Clyde North
                    </h1>
                </div>


            </header>

            <main>
                <PopUp />
                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        When tooth pain or injury strikes unexpectedly, getting prompt dental care matters. Whether your child has chipped a tooth or you’re experiencing severe discomfort, our skilled team is ready to help with reserved same-day appointments. We understand the stress and anxiety that comes with emergencies, so we prioritise your comfort and swift care.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Reserving Same-Day Care for You</h2>
                        <p className="mb-2">
                            We understand that emergencies rarely happen at convenient times. That’s why we reserve appointments each day precisely for unexpected dental situations. When you need urgent care in Clyde North, we prioritise seeing you as quickly as possible. Our modern practice is equipped to handle various emergencies with gentle, considerate care.
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
                            src="/photos/services/services-cover-1.jpg"
                            alt="Emergency Dentistry in Clyde North"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Types of Dental Emergencies</h2>
                    <p className="mb-2">Here are some common types of dental emergencies that require prompt attention: </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Chipped or cracked teeth
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Knocked-out teeth (both adult and baby teeth)
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Severe tooth pain
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Swelling or possible infections
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Injuries to the gums or soft tissues
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Loose or displaced teeth
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

