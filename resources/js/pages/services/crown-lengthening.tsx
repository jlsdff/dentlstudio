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
            <Head title="Crown Lengthening in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Improve your gum line and smile symmetry with precise reshaping." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/crown-lengthening" />

                <meta property="og:title" content="Crown Lengthening in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Improve your gum line and smile symmetry with precise reshaping." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/crown-lengthening" />
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
                        Crown Lengthening in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        At The Dentl Studio, we’re committed to offering a wide range of dental services tailored to meet the diverse needs of our patients. Crown lengthening is one such procedure that can play a crucial role in both cosmetic and restorative dental treatments, ensuring optimal outcomes for various dental issues.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What is Crown Lengthening?</h2>
                        <p className="mb-4">
                            Crown lengthening is a surgical procedure designed to expose more of the tooth structure. This procedure can be essential for various dental treatments, including fitting a new crown, addressing tooth decay below the gum line, or enhancing the aesthetics of your smile.
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Why Choose The Dentl Studio for Crown Lengthening?</h2>
                        <p className="mb-4">
                            Our skilled dental team utilizes the latest techniques and technology to perform crown lengthening procedures with precision and care. We’re dedicated to ensuring your comfort and achieving results that not only enhance the functionality of your teeth but also improve their appearance.
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
                            src="/photos/services/happy-lady-pretty-smile-h.jpg"
                            alt="Woman Smiling"
                            className="w-full max-h-[300px] md:max-h-full object-cover"
                        />
                    </div>
                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

