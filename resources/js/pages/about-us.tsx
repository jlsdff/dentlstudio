import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState, lazy } from "react";
import Footer from '@/components/home-pages/footer';

const PopUp = lazy(() => import('@/components/ui/PopUp'))
const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

export default function AboutUs() {

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
    }, []);

    return (
        <>
            <Head title="About The Dentl Studio">

                <meta name="description" content="At The Dentl Studio, we combine innovation, precision, and compassion to deliver elevated dental experiences. Learn more about our story, values, and commitment to exceptional care." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/about-us" />

                <meta property="og:title" content="About The Dentl Studio | Trusted Dentist in Clyde North" />
                <meta property="og:description" content="At The Dentl Studio, we combine innovation, precision, and compassion to deliver elevated dental experiences. Learn more about our story, values, and commitment to exceptional care." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/about-us" />
                <meta property="og:type" content="website" />

                <link
                    rel="preload"
                    as="image"
                    href="/our-space/our-space-20.webp"
                    fetchPriority="high"
                />

            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header
                ref={header}
                className="
                bg-stone-950 text-soft-200 min-h-[50svh]
                flex flex-col justify-end items-center
                p-8 md:pt-18 gap-4 relative overflow-hidden pt-16
                "
            >
                <h1 className="mt-12 md:mt-0  text-center text-4xl sm:text-5xl font-light font-serif tracking-widest" >
                    Redefining Dental Care in Clyde North
                </h1>
                <p className="text-center">
                    At The Dentl Studio, we combine innovation, precision, and compassion to deliver elevated dental experiences. Learn more about our story, values, and commitment to exceptional care.
                </p>
            </header>

            <main className="bg-soft-200 p-8 md:p-16">

                <PopUp />

                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">

                    <div className="order-2 md:order-1 md:col-span-3">
                        <h2 className="text-xl md:text-4xl font-semibold">Innovation Meets Quality Care</h2>
                        <p className="text-lg text-justify md:tracking-wide mt-4">Cutting-edge technology ensures our procedures are both precise and efficient. Our intra-oral X-ray scanner provides detailed imaging for thorough diagnostics, while Australia’s leading Philips Zoom teeth whitening gel combined with LED light technology delivers stunning results. Patients benefit from tools like Smile Design software that allow them to visualise their transformations in advance.</p>
                        <Link
                            href={route('meet-the-team')}
                            prefetch='hover'
                            className="mt-4 px-4 py-2 inline-block text-lg rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg"
                        >Meet The Team</Link>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-3">
                        <img
                            rel="preload"
                            className="w-sm md:w-full rounded-xl"
                            src="/our-space/thedentlstudio-space-20.webp"
                            alt="The Dentl Studio"
                            fetchPriority="high"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 mt-8 gap-4 ">
                    <div className="md:col-span-2">
                        <img className="rounded-xl max-h-[450px] w-full object-cover " src="/our-space/thedentlstudio-space-15.webp" alt="The Dentl Studio" />
                    </div>
                    <div className="md:col-span-4">
                        <div>
                            <h2 className="text-xl md:text-4xl font-semibold">A Practice Like No Other</h2>
                            <p className="text-lg text-justify md:tracking-wide mt-2">
                                Reinventing the patient experience is at the heart of everything we do. In addition to weighted blankets and aromatherapy, our comfort menu includes eye masks, hand and head massages, and guided meditation – all complimentary. Our Oral Health Therapists (OHTs) lead hygiene and preventative care, offering longer appointments that empower patients with knowledge and tools for optimal oral health. Every aspect of our approach is designed to build trust and create long-term relationships.
                            </p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl md:text-4xl font-semibold">A Mission Rooted in Values</h2>
                            <p className="text-lg text-justify md:tracking-wide mt-2">
                                Our mission is to combine sincere and honest care with innovation and sustainability. We prioritise patient-centred experiences, quality, and inclusivity while maintaining an environmentally conscious approach. With a commitment to comfort and transparency, we’ve set a new standard in Melbourne dentistry that goes beyond the basics to truly elevate the experience for every patient.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-8 rounded-xl
                    bg-[url('/black-linen.webp'),linear-gradient(to_bottom_right,#1d1a18,#44413c)]
                    bg-blend-overlay
                    text-soft-200">
                    <h2 className="text-xl md:text-2xl font-semibold">Ready to Experience the Vision for Yourself?</h2>
                    <p className=" text-justify mt-2">
                        Whether it’s time for your 6-monthly clean or you want to perfect your pearly whites with one of our cosmetic services, discover the distinctive differences at The Dentl Studio. Schedule your appointment at our beautiful and spacious practice and redefine your expectations of dental care!
                    </p>
                    <div className="mt-4">
                        <Link
                            className="px-5 py-2.5 bg-soft-200 text-stone-900 rounded-md w-full md:w-auto"
                            href={route('contact-us')}
                            prefetch='hover'
                        >
                            Contact Us
                        </Link>
                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}


