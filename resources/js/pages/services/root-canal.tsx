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
            <Head title="Root Canal in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Save infected teeth with precise, pain-free root canal therapy." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/root-canal" />

                <meta property="og:title" content="Root Canal in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Save infected teeth with precise, pain-free root canal therapy." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/root-canal" />
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
                        <Link href={`${route('service')}#general-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            General Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Root Canal in Clyde North
                    </h1>

                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        A sore tooth that won’t settle down? Throbbing, swelling, or a sharp jolt when you chew? You might need a root canal, but
                        don’t panic. Despite its reputation, this procedure is far more straightforward than people expect. At The Dentl Studio, we
                        make it manageable, comfortable, and stress-free.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What a Root Canal Actually Does</h2>
                        <p className="mb-4" >
                            Inside every tooth is a network of tiny nerves. Pain sets in when those nerves become infected—through deep decay, a crack, or trauma. A root canal removes the source of that infection from within the tooth roots, giving your body the chance to heal and allowing you to keep the tooth itself.

                            We’ll always talk you through the process first. In some cases, you might need antibiotics beforehand to settle any swelling. Then, under local anaesthetic, we gently remove the inflamed tissue, clean the inside, and pack it with filling material to seal it off from future trouble. A crown is usually placed afterward to support the area and prevent any breakage later on.
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">How Many Appointments Will I Need?</h2>
                        <p className="mb-4" >
                            Most root canals take two or three visits, depending on the complexity. If you’d rather get more done at once, let us know—we’ll see if we can combine the early stages into a longer appointment. And yes, you’ll always leave with something on the tooth (no exposed gaps here).
                        </p>
                    </div>
                    <div className="order-1 md:order-2 w-screen">
                        <img
                            src="/photos/services/viewing-dental-xray-h.jpg"
                            alt="Doctor showing a x-ray result"
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

