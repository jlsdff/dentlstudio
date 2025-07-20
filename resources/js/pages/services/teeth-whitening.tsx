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
            <Head title="Teeth Whitening in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Brighten your teeth safely and effectively with in-clinic whitening." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/teeth-whitening" />

                <meta property="og:title" content="Teeth Whitening in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Brighten your teeth safely and effectively with in-clinic whitening." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/teeth-whitening" />
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
                        Teeth Whitening in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Patient getting teeth whitenedBrighten your smile in a single visit with our advanced whitening system. Using Australia’s leading Philips Zoom technology, we deliver stunning results while ensuring your comfort throughout the process. Our approach combines professional results with a relaxing experience.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Our Advanced Technology</h2>
                        <p className="mb-4">
                            We combine professional-grade Philips Zoom whitening gel with cutting-edge LED light activation for optimal results. Unlike traditional systems that require you to sit still under a stationary light, our innovative LED technology clips directly to your retractor. This means you can relax, browse your phone, or catch up on work during your session. It’s just one way we make whitening more convenient for our busy patients.
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
                            src="/photos/services/1.jpg"
                            alt="Teeth Whitening Procedure"
                            className="w-full max-h-[300px] md:max-h-full object-cover"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:px-16 md:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">More Than a Procedure; It’s an Experience</h2>
                    <p className="mb-2">Your process begins with a complimentary consultation to assess your suitability and discuss your brightness goals. During your appointment, we will: </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Clean your teeth thoroughly
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Apply protective barriers to your gums
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Place the whitening gel on your teeth
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Use LED activation for approximately 45 minutes
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Remove the gel to reveal your brighter smile
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Provide aftercare instructions for lasting results
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

