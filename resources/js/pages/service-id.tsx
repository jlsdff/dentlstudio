import { NavigationBar } from "@/components/ui/nav-bar";
import { Head } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import ContactUs from "@/components/home-pages/contact-us";
import { Footer } from "./welcome";

export default function ServiceID({ service }: {
    service: {
        id: number;
        service: string;
        service_slug: string;
        description: string;
        name: string;
        image_url: string;
        slug: string;
    }
}) {

    const header = useRef<HTMLHeadElement>(null)
    const [scrolledPastHeader, setScrolledPastHeader] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                const headerHeight = header.current.offsetHeight / 6;
                setScrolledPastHeader(window.scrollY >= headerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title={service.name}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
            </Head>
            <NavigationBar scrolled={scrolledPastHeader} />
            <header ref={header} className="
                bg-stone-950 text-soft-200 min-h-[70svh] flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between
                p-8 md:p-16 gap-4 relative overflow-hidden
                bg-[url(/services/service-cover.jpg)]
                bg-center bg-cover
                ">
                <div className="bg-gradient-to-t from-stone-950 to-transparent absolute top-0 left-0 w-full h-full" />

                <div className="z-10 space-y-2 sm:space-y-4">
                    <div className="flex gap-2 items-center group  ">
                        <ChevronRight size={18} className="-translate-x-[50px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 text-soft-300" />
                        <Link href={route('service')} prefetch='hover' className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            {service.service}
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        {service.name}
                    </h1>
                </div>

            </header>
            <main className="">
                <section className="  bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="">
                            <img className="w-screen aspect-video object-cover overflow-hidden rounded-md" src={service.image_url} alt={service.name} />
                        </div>
                        <div className="space-y-4">
                            <p>{service.description}</p>
                            <a
                                className={`px-4 py-2 inline-block text-sm rounded-md bg-soft-500 text-soft-200 hover:bg-soft-600 transition-all duration-300 shadow-lg`}
                                href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                                target="_blank"
                            >
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                </section>
                <ContactUs />
                <Footer />
            </main >
        </>
    )
}

