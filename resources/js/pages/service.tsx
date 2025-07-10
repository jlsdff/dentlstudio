import { NavigationBar } from "@/components/ui/nav-bar";
import { useRef, useEffect, useState } from "react"
import { Head, Link } from "@inertiajs/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollToPlugin from 'gsap/src/ScrollToPlugin';
import { Footer } from "./welcome";

gsap.registerPlugin(useGSAP, TextPlugin, ExpoScaleEase, ScrollTrigger, ScrollToPlugin);

export default function Services() {

    const header = useRef<HTMLHeadElement>(null)

    const [scrolledPastHeader, setScrolledPastHeader] = useState(false);

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
            <Head title="Services">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <NavigationBar scrolled={scrolledPastHeader} />
            </div>

            <header
                ref={header}
                className="
                bg-stone-950 text-soft-200 min-h-[70svh] flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between
                p-8 md:p-16 gap-4 relative overflow-hidden
                bg-[url(reception.jpg)]
                bg-center bg-cover
                "
            >

                {/* <img */}
                {/*     src="reception.jpg" */}
                {/*     alt="The Dentl Studio Reception Area" */}
                {/*     className="absolute top-1/2 left-0 w-full -translate-y-1/2 object-contain" */}
                {/* /> */}

                <div className="bg-gradient-to-t from-stone-950 to-transparent absolute top-0 left-0 w-full h-full" />

                <h1 className="z-10 text-soft-100 text-center text-2xl sm:text-5xl font-light font-serif tracking-widest">
                    Our <span className="text-soft-300">Dentl</span> Services
                </h1>

                <p className="z-10 max-w-sm">
                    <span className="font-semibold">
                        Exceptional care. Thoughtfully delivered.
                    </span>
                    <br />
                    Each treatment is designed to enhance your smile with precision, comfort, and elegance.
                </p>
            </header>
            <main >

                <section className="min-h-[90svh] bg-stone-950 text-soft-200 p-8 md:p-16 tracking-widest">

                    <div id="general-dentistry" className="">
                        <h2 className=" text-2xl font-bold ">General Dentistry</h2>
                        <p className=" mt-2">
                            Our general dentistry services in The Dentl Studio include routine dental checkups,
                            emergency dental care, teeth grinding treatment, TMJ therapy, root canals, children’s dentistry,
                            and oral cancer screenings. We focus on prevention, early detection, and ongoing care to keep your smile healthy for life.
                        </p>

                        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-4 gap-4 ">

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/emergency.webp" alt="Emergency Dentistry"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Emergency Dentistry</h3>
                                <p className="text-sm">
                                    Fast, expert care for dental pain, injuries, or urgent concerns—when your smile can’t wait.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/check_up_and_cleans.jpg" alt="Check up and Cleans"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Check up and Cleans</h3>
                                <p className="text-sm">
                                    Fast, expert care for dental pain, injuries, or urgent concerns—when your smile can’t wait.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/teeth-grinding.jpeg" alt="Teeth Grinding"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Teeth Grinding</h3>
                                <p className="text-sm">
                                    Protect your smile from wear with custom solutions for night-time grinding.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/root-canals.jpeg" alt="Root Canals"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Root Canals</h3>
                                <p className="text-sm">
                                    Save your natural tooth and eliminate pain with gentle root canal treatment.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/tmj.webp" alt="TMJ Treatment"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">TMJ Treatment</h3>
                                <p className="text-sm">
                                    Relieve jaw pain, tension, and headaches with personalized TMJ therapy.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/mouthguards.jpg" alt="Sports Mouthguards"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Sports Mouthguards</h3>
                                <p className="text-sm">
                                    Custom-fitted mouthguards to shield your teeth during contact sports.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/children_check_up.jpg" alt="Children Dentistry"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Children's Dentistry</h3>
                                <p className="text-sm">
                                    Gentle, friendly dental care designed for growing smiles.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/screening.jpg" alt="Oral Cancer Screening"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Oral Cancer Screening</h3>
                                <p className="text-sm">
                                    Quick, painless checks to detect early signs of oral cancer.
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div id="cosmetic-dentistry" className="">

                        <h2 className="text-2xl font-bold ">Cosmetic Dentistry</h2>
                        <p className="mt-2">
                            Our cosmetic treatments are designed to refine and rejuvenate your smile through advanced techniques like veneers, whitening, and smile makeovers—delivered with artistry and attention to detail.
                        </p>
                        <div className="cards cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-4 gap-4 ">


                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/veneers.jpg" alt="Veneers"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Veneers</h3>
                                <p className="text-sm">
                                    Transform your smile instantly with ultra-thin porcelain veneers that cover chips, gaps, and discoloration.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/1.jpg" alt="Teeth Whitening"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Teeth Whitening</h3>
                                <p className="text-sm">
                                    Achieve a visibly brighter smile in just one visit with safe, professional whitening treatments.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/smile-makeover.jpg" alt="Smile makeover"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Smile Makeover</h3>
                                <p className="text-sm">
                                    A fully customized plan combining multiple cosmetic treatments to enhance your entire smile.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/dental-bonding.jpg" alt="Dental Bonding"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Dental Bonding</h3>
                                <p className="text-sm">
                                    Repair chips, close gaps, and refine your smile with quick, minimally invasive bonding.
                                </p>
                            </Link>

                            <Link
                                href=""
                                prefetch="hover"
                                className="card p-4 hover:bg-stone-800 duration-300 ease-out rounded-xl"
                            >
                                <img src="/services/crown.jpg" alt="Crown Lengthening"
                                    className="rounded-t-lg w-full aspect-video object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-3">Crown Lengthening</h3>
                                <p className="text-sm">
                                    Reshape your gumline to create a more balanced, even smile—ideal for a “gummy” smile.
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-center text-2xl font-bold ">Restorative Dentistry</h2>
                        <p className="text-center mt-2">
                            <span className="font-bold">Restore function. Renew confidence.</span>
                            <br />
                            We combine modern techniques with tailored care to repair, replace, or rebuild damaged teeth—helping you regain a seamless, natural-looking smile through crowns, implants, and more.
                        </p>
                        <div className="cards">

                            <div className="card">
                                <h3>njandks</h3>
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-center text-2xl font-bold ">Oral Surgery</h2>
                        <p className="text-center mt-2">
                            <span className="font-bold">Expert care for complex needs.</span>
                            <br />
                            Whether it's a simple extraction or full implant replacement, our oral surgery solutions are performed with precision and care—ensuring comfort, safety, and optimal results.
                        </p>
                        <div className="cards">

                            <div className="card">
                                <h3>njandks</h3>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

