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
            <Head title="Oral Cancer Screening in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Quick, effective screenings for early signs of oral cancer." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/screening-for-oral-cancer" />

                <meta property="og:title" content="Oral Cancer Screening in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Quick, effective screenings for early signs of oral cancer." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/screening-for-oral-cancer" />
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
                        Oral Cancer Screening in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        While cancer can be a scary word to hear, there is something patients can do to help limit their chances of being diagnosed during a late stage of the disease. When it comes to oral cancer, the disease is generally 80-90% curable when caught early.

                        At The Dentl Studio, the team is proud to offer oral cancer screenings for patients of every age and stage of life, and includes the service in all routine checkup and cleanings that are booked in the practice.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What to Expect?</h2>
                        <p className="mb-4">
                            Oral cancer screenings are painless and quick in the practice. During a patient’s checkup and cleaning appointment, a hygienist will perform the screening by looking for soft tissue abnormalities.
                            <br />
                            In addition, X-rays can often provide a great diagnostic tool for early detection deeper in the mouth and bones.
                            <br />
                            Should anything out of the ordinary be discovered during a patient’s visit, the dentist will promptly refer them to care with an appropriate physician. That’s a promise!
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Risk Factors</h2>
                        <p>
                            While many patients correctly associate tobacco and alcohol use with an increase in oral cancer, nearly 27% of people diagnosed with the disease aren’t alcohol or tobacco users.
                            <br />
                            Other risk factors include being over the age of 45 and male. A family history of oral cancer may also lead to an increased risk in developing the condition.
                        </p>
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
                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Book an Oral Cancer Screening</h2>
                    <p>
                        The Dentl Studio encourages all patients to book an oral cancer screening if they have a family history of the disease or simply want to make sure their oral health is in tip-top shape. Contact the practice today to begin the process.
                    </p>
                    <a
                        aria-label="Book an appointment at The Dentl Studio"
                        className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                        href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                        target="_blank"
                    >
                        Book an Appointment
                    </a>
                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

