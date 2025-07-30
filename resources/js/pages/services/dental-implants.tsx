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
            <Head title="Dental Implants in Clyde North">

                <meta name="description" content="Permanent tooth replacements that look and feel real." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/dental-implants" />

                <meta property="og:title" content="Dental Implants in Clyde North" />
                <meta property="og:description" content="Permanent tooth replacements that look and feel real." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/dental-implants" />
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
                        <Link href={`${route('service')}#restorative-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Restorative Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Dental Implants in Clyde North
                    </h1>
                </div>


            </header>

            <main>
                <PopUp />
                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Missing teeth can interrupt more than how you look. They may change how you speak, bite, and feel about your smile. That’s why dental bridges at The Dentl Studio are about more than filling a gap; they’re crafted to restore comfort, confidence, and connection.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Are Dental Implants?</h2>
                        <p className="mb-4">
                            Implants are made up of a titanium screw and a post that is covered with a crown, bridge or denture. We place the implant into the jawbone where it replaces the tooth root. After several months, the implant attaches to the bone, so it now looks and “acts” just like a natural tooth.
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
                            src="/photos/services/implants.jpg"
                            alt="Tooth Implant"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What to Expect?</h2>
                    <div className="mt-2">
                        <h3 className="font-semibold flex items-center gap-2">
                            <ChevronRight size={18} />
                            Evaluation
                        </h3>
                        <p>
                            A patient needs to be evaluated to ensure there is enough bone available to secure the implant. Impressions are taken to provide the necessary mould for a customized implant.
                        </p>
                    </div>
                    <div className="mt-2">
                        <h3 className="font-semibold flex items-center gap-2">
                            <ChevronRight size={18} />
                            Placement
                        </h3>
                        <p>
                            When it’s time to place your implant, we’ll incorporate [anesthetic] so that you don’t feel a thing and remain calm and comfortable the entire time. Once the implant is firmly embedded into the bone, a post is attached to it and then the doctor creates a permanent tooth replacement.
                        </p>
                    </div>
                    <div className="mt-2">
                        <h3 className="font-semibold flex items-center gap-2">
                            <ChevronRight size={18} />
                            Results
                        </h3>
                        <p>
                            It’s important to remember that your new implant will look and function just as your natural teeth. This means you’ll be able to chew easily and speak properly, with the added bonus of having a new, beautiful tooth to complete your smile.
                        </p>
                    </div>
                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

