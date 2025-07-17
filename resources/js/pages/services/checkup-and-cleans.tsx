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
            <Head title="Checkup and Cleans in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Maintain oral health with regular dental exams and professional teeth cleaning." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/checkup-and-cleans" />

                <meta property="og:title" content=" Checkup and Cleans in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Maintain oral health with regular dental exams and professional teeth cleaning." />
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
                        Checkup and Cleans in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Keeping your smile healthy and beautiful is our number one priority. One of the most important ways you can help do good by your mouth is to visit us for twice-yearly checkup and cleans.
                        At The Dentl Studio, we’re proud to welcome patients of all ages and walks of life to schedule a general clean with us to ensure your oral health is in tip-top shape.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Reserving Same-Day Care for You</h2>
                        <p className="mb-4">
                            Maintain a healthy, confident smile with our comprehensive dental check-up and clean. At The Dentl Studio,
                            we offer gentle, thorough exams and professional teeth cleaning to prevent decay, detect issues early
                            , and keep your smile feeling fresh. Ideal for patients of all ages, our preventive care ensures long-term
                            oral health in a calm, modern setting.
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
                            src="/photos/services/check_up_and_cleans-1.jpg"
                            alt="Check up and Cleans in Clyde North"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Happens During a Checkup and Cleaning?</h2>
                    <p className="mb-2">During these important visits, we have the chance to:</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Take x-rays to look for changes or problems
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Thoroughly clean your teeth                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Perform a fluoride treatment (if necessary)
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={18} />
                            Make recommendations for further custom treatments
                        </li>
                    </ul>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

