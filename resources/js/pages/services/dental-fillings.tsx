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
            <Head title="Dental Fillings in Clyde North">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Treat cavities with natural-looking, tooth-colored fillings." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/dental-fillings" />

                <meta property="og:title" content="Dental Fillings in Clyde North" />
                <meta property="og:description" content="Treat cavities with natural-looking, tooth-colored fillings." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/dental-fillings" />
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
                        Dental Fillings in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Nobody loves hearing they need a filling. But fixing a cavity doesn’t have to be a hassle. At The Dentl Studio, dental fillings are efficient, comfortable, and tailored to suit your needs. Whether you’ve spotted a new issue or are midway through a treatment plan, our team is here to help you restore your smile with minimal fuss.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Fillings Actually Do</h2>
                        <p className="mb-4">
                            Fillings repair the damage caused by the decay. After gently removing the affected area, we place a filling to seal the space, keeping out bacteria and helping your tooth stay strong for everyday use. Depending on the situation, you’ll have a say in which material we use. Think of it as a patch-up job that stops things from getting worse and lets you chew, talk, and smile with ease.
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
                            src="/photos/services/man-inspects-his-teeth-in-mirror.jpg"
                            alt="Man inspect his teeth in the mirror"
                            className="w-screen"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 mb:pt-0 tracking-widest" >

                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Composite or Silver? You Choose.</h2>
                    <p className="mb-2">For most people, composite (white) fillings are the go-to. They blend in beautifully with your natural teeth and are less invasive to apply. We carry a wide shade range, which is especially helpful for visible teeth, so your filling looks like it was never there. Silver (amalgam) fillings are still available and can be a cost-conscious choice for large cavities in back teeth, though they can expand over time and may lead to future cracking.
                    </p>

                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

