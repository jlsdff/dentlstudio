import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollToPlugin from 'gsap/src/ScrollToPlugin';
import { useRef, useEffect, useState } from 'react';
import { NavigationBar } from '@/components/ui/nav-bar';
import { ChevronRight } from 'lucide-react';
import { ChevronsUp, Facebook, Instagram, Mail } from "lucide-react";
import ContactUs from '@/components/home-pages/contact-us';
import Testimonials from '@/components/home-pages/testimonials';
import Footer from '@/components/home-pages/footer';


gsap.registerPlugin(useGSAP, TextPlugin, ExpoScaleEase, ScrollTrigger, ScrollToPlugin);

export default function Welcome() {

    const wrapper = useRef<HTMLDivElement>(null)
    const header = useRef<HTMLDivElement>(null)
    const loading = useRef(null)
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

    useGSAP(() => {

        document.body.style.overflow = 'hidden'

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
            }
        })

        const split = SplitText.create('.loading-2', { type: "chars" })

        tl.from(split.chars, {
            opacity: 0,
            xPercent: 100,
            ease: "expo.out",
            stagger: 0.1,
            delay: 1,
            duration: 0.5
        })
            .from('.loading-1', {
                opacity: 0,
                yPercent: -100,
                ease: 'expo.out',
                duration: 0.3
            })
            .from('.loading-3', {
                opacity: 0,
                yPercent: 100,
                ease: 'expo.out',
                duration: 0.3
            }, "<")
            .from('.mid-div', {
                yPercent: 100,
                ease: 'expo.out',
                duration: 1
            })
            .to('.loading-1', {
                opacity: 0,
                y: -100,
                ease: 'expo.in',
                duration: 0.3,
            })
            .to('.loading-3', {
                opacity: 0,
                yPercent: 100,
                ease: 'expo.in',
                duration: 0.3,
            }, "<")
            .to(split.chars, {
                opacity: 0,
                xPercent: 100,
                ease: "expo.in",
                stagger: 0.1,
                duration: 0.5
            })
            .to('.mid-div', {
                opacity: 0,
                y: -100,
                ease: 'expo.in',
                duration: 0.5
            }, "<")
            .to('.sec-1', {
                yPercent: 100,
                ease: "expo.in",
                duration: 1
            })
            .to('.sec-2', {
                yPercent: -100,
                ease: 'expo.in',
                duration: 1
            }, "<")
            .from('.hero', {
                yPercent: 100,
                ease: 'expo.out',
                duration: 0.5,
                delay: 0.3,
            })
            .from('.nav-item', {
                yPercent: -100,
                ease: 'expo.out',
                duration: 0.3,
            }, "<")
            .set(loading.current, { display: 'none' })

    }, { scope: wrapper })

    return (
        <>

            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Clyde North dentists & team provide exceptional care and offer an array of smile-enhancing services and luxurious touches. Book an appointment today!" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com" />

                <meta property="og:title" content="The Dentl Studio | Trusted Dentists in Clyde North" />
                <meta property="og:description" content="Clyde North dentists & team provide exceptional care and offer an array of smile-enhancing services and luxurious touches. Book an appointment today!" />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com" />
                <meta property="og:type" content="website" />
            </Head>


            <div ref={wrapper} >

                <div ref={loading} aria-hidden>
                    <div className='fixed top-0 left-0 z-50 h-screen w-screen flex'>
                        <div className='bg-black flex-1 sec-1' />
                        <div className='mid-div w-[2px] bg-gray-600/50 absolute top-0 left-1/2 h-screen' />
                        <div className='bg-black flex-1 sec-2' />
                    </div>
                    <div className='z-100 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif '>
                        <div className='overflow-hidden'>
                            <span className='loading-1 font-sans text-sm sm:text-base block '>THE</span>
                            <span className='loading-2 block text-4xl sm:text-6xl' >DENTL</span>
                            <span className='loading-3 font-sans text-sm sm:text-base block text-right'>STUDIO</span>
                        </div>
                    </div>
                </div>

                <NavigationBar scrolled={scrolledPastHeader} />

                <header ref={header} className='h-[100svh] overflow-hidden relative'>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/thedentlstudio.jpg"
                        preload='auto'
                    >
                        <source src="/thedentlstudio.webm" type="video/webm" />
                    </video>
                    <div className="absolute inset-0 bg-stone-950/30 z-0" />
                    <div className="relative z-10 flex flex-col items-center justify-end h-full p-16 gap-4">
                        <div className='overflow-hidden'>
                            <h1 className="hero text-soft-100 text-center text-2xl sm:text-5xl font-light font-serif tracking-widest">Where Comfort Meets Excellence</h1>
                        </div>
                        {/* <div className='overflow-hidden'> */}
                        {/*     <p className='hero text-white text-sm text-center sm:text-left sm:text-lg '>Where innovation meets the senses — personalised, honest, and exceptional care.</p> */}
                        {/* </div> */}
                    </div>
                </header>

                <main>

                    <Services />

                    <AboutUs />

                    <ContactUs />

                    <Testimonials />

                </main>

                <Footer />
            </div>
        </ >
    );
}

function AboutUs() {

    const aboutus = useRef<HTMLElement>(null);

    const init = 'text-soft-300 bg-stone-950'
    const exec = 'text-stone-950 bg-soft-200'

    useGSAP(() => {

        const el = aboutus.current;
        if (!el) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutus.current,
                start: 'top 60%',
                toggleActions: 'play none none none',
                onEnter: () => {
                    el?.classList.remove(...init.split(' '));
                    el?.classList.add(...exec.split(' '))
                }
            },

        });

        gsap.to('.img', {
            scrollTrigger: {
                trigger: '.img',
                endTrigger: '.list',
                start: 'top top',
                end: 'bottom bottom',
                toggleActions: 'play paused none none',
                pin: true,
            },
        })


    }, { scope: aboutus })

    return (
        <>
            <section ref={aboutus} className={`min-h-[90svh] px-4 py-16 sm:p-16 ${init} duration-1000 ease-out `}>

                <div className='text-center block sm:hidden'>
                    <h2 className='mb-2 sm:mb-4 text-center sm:text-left'>About us</h2>
                    <h3 className='text-4xl sm:text-8xl font-semibold font-serif text-center sm:text-left tracking-wider'>
                        Why Choose us?
                    </h3>
                </div>

                <div className='mt-8 flex gap-0 sm:gap-4'>

                    <div className='hidden sm:block w-1/2 '>

                        <div className='img sm:pt-[125px]'>
                            <h2 className='mb-2 sm:mb-4 text-center sm:text-left'>About us</h2>
                            <h3 className='  text-4xl sm:text-8xl font-semibold font-serif text-center sm:text-left tracking-wider'>
                                Why <br /> Choose <br /> us?
                            </h3>
                        </div>

                    </div>

                    <div className=' w-full sm:w-1/2 list '>

                        <div className=' py-4 sm:pt-[125px] '>
                            <h4 className='text-xl font-semibold'>Patient-Centred Philosophy</h4>
                            <p className='text-lg tracking-wider leading-8'>Your comfort, needs, and goals guide every decision we make. At The Dentl Studio, you're not just a patient – you're a partner in your dental health journey.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Exceptional Quality & Expertise</h4>
                            <p className='text-lg tracking-wider leading-8'>Our highly trained clinicians combine years of experience with the latest techniques to deliver premium dental care with no compromises.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Sincere, Transparent Care</h4>
                            <p className='text-lg tracking-wider leading-8'>We believe in honesty and clarity. From treatment plans to pricing, you’ll always know where you stand—no surprises, just genuine care.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Sensory Dental Experience</h4>
                            <p className='text-lg tracking-wider leading-8'>We’ve reimagined the dental visit by curating a sensory environment that engages all five senses. Step into a space that’s calming, immersive, and designed to change the way you feel about dentistry.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Complimentary Cosmetic Consultations</h4>
                            <p className='text-lg tracking-wider leading-8'>Curious about enhancing your smile? Book a free cosmetic consultation and discover what's possible—obligation-free.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>New Patient Welcome Offer</h4>
                            <p className='text-lg tracking-wider leading-8'>We make it easy to get started with a full check-up and professional clean for just $199. A perfect introduction to our comprehensive care.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Convenience Without Compromise</h4>
                            <p className='text-lg tracking-wider leading-8'>From online bookings to extended hours and central Melbourne location, we make great dental care easy and accessible for busy lives.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Respect for Every Individual</h4>
                            <p className='text-lg tracking-wider leading-8'>We proudly serve Melbourne’s diverse community with cultural sensitivity, inclusivity, and a deep respect for every patient’s background and story.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Sustainable Dental Practice</h4>
                            <p className='text-lg tracking-wider leading-8'>Our clinic takes environmental responsibility seriously. We’re committed to eco-conscious practices that protect your health—and the planet.</p>
                        </div>

                        <div className=' py-4 sm:py-[25px] '>
                            <h4 className='text-xl font-semibold'>Long-Term Relationships, Not One-Off Visits</h4>
                            <p className='text-lg tracking-wider leading-8'>We’re here for you beyond a single appointment. Our goal is to build lifelong trust and support your dental health for the long haul.</p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

function Services() {

    const services = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: services.current,
                toggleActions: 'play none none none',
                start: 'top 75%'
            }
        });
        tl.from('.service-text', {
            autoAlpha: 0,
            duration: 1,
            y: 100,
            ease: 'power3.out',
        }).from('.cards', {
            autoAlpha: 0,
            x: 50,
            ease: 'power3.out',
            duration: 1,
            stagger: 0.1,
        })
    }, { scope: services })

    return (
        <>
            <section ref={services} className='min-h-[90svh]' id="main">

                <div className='inset-4 h-full w-full bg-stone-950 px-4 py-16 sm:p-16 text-soft-200 '>
                    <h2 className='service-text mb-2 sm:mb-4 text-center sm:text-left'>Our services</h2>
                    <div className='flex flex-col sm:flex-row sm:items-end'>
                        <div className='flex-1'>
                            <h3 className='service-text mb-8 sm:mb-0 text-6xl sm:text-8xl font-serif text-center sm:text-left text-soft-300' >
                                Certified
                                <br />
                                Excellence
                            </h3>
                        </div>
                        <div className='w-full sm:max-w-sm'>
                            <p className='service-text text-sm text-justify '>
                                Experience modern dentistry redefined — from LED whitening in our comfort lounge to advanced veneers and clear aligners. We blend cutting-edge tech with a serene, spa-like atmosphere to make every visit feel indulgent.
                            </p>
                            <div className='flex justify-around mt-4 font-bold text-base'>
                                <Link
                                    href={route('service')}
                                    prefetch="hover"
                                    className="service-text group flex items-center gap-1 hover:text-soft-500 relative cursor-pointer">
                                    <ChevronRight
                                        className="absolute -left-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                                        size={20}
                                    />
                                    <span className="transition-all duration-300 group-hover:translate-x-2">
                                        View All Services
                                    </span>
                                </Link>

                                <button className="service-text group flex items-center gap-1 hover:text-soft-500 relative cursor-pointer">
                                    <ChevronRight
                                        className="absolute -left-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                                        size={20}
                                    />
                                    <span className="transition-all duration-300 group-hover:translate-x-2">
                                        Book now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='flex gap-4 mt-4 sm:mt-8 overflow-x-auto pb-4 scrollbar-minimal'>

                        <Link
                            href={route('teeth-whitening')}
                            prefetch="hover"
                            className='cards outline outline-soft-200/50 rounded-xl'>
                            <div className='w-64 h-92 rounded-xl flex items-end p-4
                                        group relative overflow-hidden transition-all duration-500
                                        ease-out
                                        '>
                                <div className='absolute inset-0 bg-[url(/photos/services/1.jpg)] bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl'></div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-transparent to-stone-950 transition-all duration-500 ease-out' />
                                <div className='z-10 transition-all duration-500 ease-out'>
                                    <h3 className='text-lg font-bold tracking-wide mb-2 transition-all duration-500 ease-out'>Teeth Whitening</h3>
                                    <p className='text-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 ease-out'>
                                        Experience a brighter smile in one appointment with our professional Philips Zoom whitening, enhanced by LED light and paired with a complimentary hand massage, aromatherapy, or face mask for ultimate comfort.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={route('veneers')}
                            prefetch="hover"
                            className='cards outline outline-soft-200/50 rounded-xl'>
                            <div className='w-64 h-92 rounded-xl flex items-end p-4
                                        group relative overflow-hidden
                                        '>
                                <div className='absolute inset-0 bg-[url(/photos/services/2.jpg)] bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl'></div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-transparent to-stone-950 transition-all duration-500 ease-out' />
                                <div className='z-10 transition-all duration-500 ease-out'>
                                    <h3 className='text-lg font-bold tracking-wide mb-2 transition-all duration-500 ease-out'>Veneers</h3>
                                    <p className='text-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 ease-out'>
                                        Transform your smile with custom-made veneers — perfect for covering chips, gaps, or discoloration and achieving a naturally beautiful, flawless look.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={route('clear-aligners')}
                            prefetch="hover"
                            className='cards outline outline-soft-200/50 rounded-xl'>
                            <div className='w-64 h-92 rounded-xl flex items-end p-4
                                        group relative overflow-hidden
                                        '>
                                <div className='absolute inset-0 bg-[url(/photos/services/3.jpg)] bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl'></div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-transparent to-stone-950 transition-all duration-500 ease-out' />
                                <div className='z-10 transition-all duration-500 ease-out'>
                                    <h3 className='text-lg font-bold tracking-wide mb-2 transition-all duration-500 ease-out'>Clear Aligners</h3>
                                    <p className='text-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 ease-out'>
                                        Experience a brighter smile in one appointment with our professional Philips Zoom whitening, enhanced by LED light and paired with a complimentary hand massage, aromatherapy, or face mask for ultimate comfort.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={route('smile-makeover')}
                            prefetch="hover"
                            className='cards outline outline-soft-200/50 rounded-xl'>
                            <div className='w-64 h-92 rounded-xl flex items-end p-4
                                        group relative overflow-hidden
                                        '>
                                <div className='absolute inset-0 bg-[url(/photos/services/smile.jpg)] bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl'></div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-transparent to-stone-950 transition-all duration-500 ease-out' />
                                <div className='z-10 transition-all duration-500 ease-out'>
                                    <h3 className='text-lg font-bold tracking-wide mb-2 transition-all duration-500 ease-out'>Smile Makeover</h3>
                                    <p className='text-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 ease-out'>
                                        Transform your smile with a personalised smile makeover—combining cosmetic treatments to enhance your confidence and appearance.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={route('emergency-dentistry')}
                            prefetch="hover"
                            className='cards outline outline-soft-200/50 rounded-xl'>
                            <div className='w-64 h-92 rounded-xl flex items-end p-4
                                        group relative overflow-hidden
                                        '>
                                <div className='absolute inset-0 bg-[url(/photos/services/emergency.webp)] bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl'></div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-transparent to-stone-950 transition-all duration-500 ease-out' />
                                <div className='z-10 transition-all duration-500 ease-out'>
                                    <h3 className='text-lg font-bold tracking-wide mb-2 transition-all duration-500 ease-out'>Emergency Dentistry</h3>
                                    <p className='text-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 ease-out'>
                                        Get fast, expert care for dental emergencies—relieving pain and protecting your smile when urgent issues arise.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={route('service')}
                            prefetch="hover"
                            className='cards w-64 h-92 rounded-xl flex items-center p-4
                                        group
                                        '>
                            <p className="group-hover:underline">See More</p>
                            <ChevronRight />
                        </Link>

                    </div>

                </div>

            </section>
        </>
    )
}
