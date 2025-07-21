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
            <Head title="Children&apos;s Dentistry in Clyde North">

                <meta name="description" content="Gentle, expert dental care tailored to kids and young patients." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/childrens-dentistry" />

                <meta property="og:title" content="Children&apos;s Dentistry in Clyde North - The Dentl Studio" />
                <meta property="og:description" content="Gentle, expert dental care tailored to kids and young patients." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/childrens-dentistry" />
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
                        <Link href={`${route('service')}#general-dentistry`}
                            prefetch='hover'
                            className="-translate-x-[24px] group-hover:translate-x-0 duration-300 ease-out text-soft-300" >
                            General Dentistry
                        </Link>
                    </div>
                    <h1 className=" text-soft-100 text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest">
                        Children&apos;s Dentistry in Clyde North
                    </h1>
                </div>


            </header>

            <main>

                <PopUp/>

                <section className="bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">
                    <p>
                        One of our greatest passions is helping children of all ages achieve and maintain beautiful, healthy smiles. This passion drives The Dentl Studio’s approach to children’s dentistry, where our dedicated dental professionals genuinely care about your child’s experience.
                    </p>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:p-16  tracking-widest
                    grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="order-2 md:order-1 col-span-4">
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Unhurried, Interactive Appointments</h2>
                        <p className="mb-4">
                            Unlike traditional practices where appointments may be rushed, we allocate generous time for each child’s visit. Our team works on an hourly schedule rather than trying to maximise patient turnover, ensuring your child never feels like “just another appointment.” This allows our therapists to make each visit interactive, engaging, and even fun—turning what could be a stressful experience into something kids actually look forward to!
                        </p>
                        <a
                            aria-label="Book an appointment at The Dentl Studio"
                            className={`mb-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                            href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                            target="_blank"
                        >
                            Book an Appointment
                        </a>
                        <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Child-Friendly Environment</h2>
                        <p>
                            From the moment your family walks through our doors, you’ll feel right at home. Our reception area features colouring books, pencils, stickers, and complimentary take-home toothbrushes and toys. During treatment, we offer children’s shows on our ceiling-mounted screens, creating a comfortable distraction that helps time fly by. Every aspect of our practice has been designed with kids’ comfort in mind.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 col-span-2">
                        <img
                            src="/photos/services/children_check_up.jpg"
                            alt="Child being check up by a dentist"
                            className="w-full"
                        />
                    </div>
                </section>

                <section className="text-stone-950 bg-soft-200 p-8 md:px-16 md:pt-0 tracking-widest" >
                    <h2 className="text-xl sm:text-2xl mb-4 font-semibold ">Medicare Child Dental Benefits</h2>
                    <p>
                        We proudly participate in the Child Dental Benefits Schedule, making quality dental care more accessible for eligible families. This Medicare program helps offset the cost of essential dental services, allowing more children to receive the preventative and routine care they need without financial barriers.
                    </p>
                </section>

                <ContactUs />
                <Footer />

            </main>

        </>
    )
}

