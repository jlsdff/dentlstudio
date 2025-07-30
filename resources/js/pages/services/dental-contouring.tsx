import { Head } from "@inertiajs/react";
import { lazy, useEffect, useRef, useState } from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import ContactUs from "@/components/home-pages/contact-us";
import Footer from '@/components/home-pages/footer';

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
            <Head title="Dental Contouring in Clyde North">

                <meta name="description" content="Smooth out uneven teeth for a balanced, refined smile." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/dental-contouring" />

                <meta property="og:title" content="Dental Contouring in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Smooth out uneven teeth for a balanced, refined smile." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/dental-contouring" />
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
                        <Link href={`${route('service')}#cosmetic-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Cosmetic Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Dental Contouring in Clyde North
                    </h1>
                </div>


            </header>

            <main>
                <PopUp />
                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Dental contouring at The Dentl Studio is a cosmetic dental procedure that can be used to improve the appearance of your teeth. The procedure involves removing a small amount of tooth enamel to change the shape or size of your teeth. It is usually done in conjunction with other cosmetic dental procedures, such as teeth whitening or bonding.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What is Dental Contouring?</h2>
                        <p className="mb-4">
                            Dental contouring can be used to change the shape of your teeth, make them appear longer or shorter, or make them look more symmetrical. The procedure can also be used to correct minor chips or cracks in your teeth. In some cases, dental contouring may also be used to prepare your teeth for bonding or veneers.
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">What Should I Expect After Dental Contouring?</h2>
                        <p className="mb-4">
                            After the procedure, you may experience some sensitivity in your teeth for a few days. This is normal and should go away within a week or so. Your dentist may recommend that you use a desensitizing toothpaste during this time to help alleviate any discomfort.
                            <br />
                            You should also avoid hard or sticky foods for 24 hours after the procedure to reduce the risk of damaging your teeth.
                            <br />
                            It is also important to remember that dental contouring can only be used to make minor changes to your teeth. If you are looking for more significant changes, you may want to consider other options, such as veneers or braces.
                        </p>

                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
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
                            src="/photos/services/closeup-teeth-laughing-woman-sq-400.jpg"
                            alt="Woman Laughing"
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

