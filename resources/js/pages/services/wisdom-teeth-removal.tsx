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
            <Head title="Wisdom Teeth Removal in Clyde North">

                <meta name="description" content="Expert extraction of impacted or painful wisdom teeth." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/wisdom-teeth-removal" />

                <meta property="og:title" content="Wisdom Teeth Removal in Clyde North" />
                <meta property="og:description" content="Expert extraction of impacted or painful wisdom teeth." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/wisdom-teeth-removal" />
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
                        <Link href={`${route('service')}#oral-surgery`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            Oral Surgery
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Wisdom Teeth Removal in Clyde North
                    </h1>
                </div>


            </header>

            <main>
                <PopUp/>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        Wisdom teeth have a way of making themselves known – through pressure, pain, swelling, or even infection. But removing them doesn’t need to feel like a big ordeal. At The Dentl Studio, we take a measured, calm, and thoughtful approach that puts your total experience first from start to finish.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">No Guesswork, Just Clear Planning</h2>
                        <p className="mb-4">
                            Every case begins with a full-mouth X-ray and a detailed assessment. If it’s determined that your wisdom teeth can be removed in-house, one of our experienced general dentists will guide you through the process.
                            <br />
                            If not, we’ll refer you to a trusted oral surgeon – at no cost for the referral. This balanced approach ensures you explore the most appropriate and cost-effective path before making any decisions.
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
                            src="/photos/services/dentist-patient-heart-hands-h.jpg"
                            alt="Dentist Patient Heart Hands"
                            className="w-screen"
                        />
                    </div>

                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:pb-16 md:px-16 md:pt-1 tracking-widest" >

                    <h2 className="mt-4 text-xl sm:text-2xl mb-4 font-semibold ">Designed for Your Peace of Mind</h2>
                    <p className="mb-4">
                        We know dental procedures, especially extractions, can make some people feel anxious. That’s why we offer a Comfort Menu to help you feel calm and cared for during your visit. Whether it’s noise-cancelling headphones, a weighted blanket, hand massage, aromatherapy, or your favourite Netflix series onscreen, we support you every step of the way.
                        <br />
                        Nervous? Let us know, and we’ll extend your appointment by 15 minutes, giving you time to settle in and ask questions without pressure.
                    </p>
                </section>
                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

