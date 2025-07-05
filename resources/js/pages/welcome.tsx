import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from 'gsap/dist/SplitText';
import { ExpoScaleEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useEffect, useState } from 'react';
import { NavigationBar } from '@/components/ui/nav-bar';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, TextPlugin, ExpoScaleEase);

export default function Welcome() {

    const { auth } = usePage<SharedData>().props;
    const wrapper = useRef<HTMLDivElement>(null)
    const header = useRef<HTMLDivElement>(null)
    const loading = useRef(null)
    const [scrolledPastHeader, setScrolledPastHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                const headerHeight = header.current.offsetHeight / 4;
                setScrolledPastHeader(window.scrollY >= headerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useGSAP(() => {
    //
    //     document.body.style.overflow = 'hidden'
    //
    //     const tl = gsap.timeline({
    //         onComplete: () => {
    //             document.body.style.overflow = ''
    //         }
    //     })
    //
    //     const split = SplitText.create('.loading-2', { type: "chars" })
    //
    //     tl.from(split.chars, {
    //         opacity: 0,
    //         xPercent: 100,
    //         ease: "expo.out",
    //         stagger: 0.1,
    //         delay: 1,
    //         duration: 0.5
    //     })
    //         .from('.loading-1', {
    //             opacity: 0,
    //             yPercent: -100,
    //             ease: 'expo.out',
    //             duration: 0.3
    //         })
    //         .from('.loading-3', {
    //             opacity: 0,
    //             yPercent: 100,
    //             ease: 'expo.out',
    //             duration: 0.3
    //         }, "<")
    //         .from('.mid-div', {
    //             yPercent: 100,
    //             ease: 'expo.out',
    //             duration: 1
    //         })
    //         .to('.loading-1', {
    //             opacity: 0,
    //             y: -100,
    //             ease: 'expo.in',
    //             duration: 0.3,
    //         })
    //         .to('.loading-3', {
    //             opacity: 0,
    //             yPercent: 100,
    //             ease: 'expo.in',
    //             duration: 0.3,
    //         }, "<")
    //         .to(split.chars, {
    //             opacity: 0,
    //             xPercent: 100,
    //             ease: "expo.in",
    //             stagger: 0.1,
    //             duration: 0.5
    //         })
    //         .to('.mid-div', {
    //             opacity: 0,
    //             y: -100,
    //             ease: 'expo.in',
    //             duration: 0.5
    //         }, "<")
    //         .to('.sec-1', {
    //             yPercent: 100,
    //             ease: "expo.in",
    //             duration: 1
    //         })
    //         .to('.sec-2', {
    //             yPercent: -100,
    //             ease: 'expo.in',
    //             duration: 1
    //         }, "<")
    //         .from('.hero', {
    //             yPercent: 100,
    //             ease: 'expo.out',
    //             duration: 0.5,
    //             delay: 0.3,
    //         })
    //         .from('.nav-item', {
    //             yPercent: -100,
    //             ease: 'expo.out',
    //             duration: 0.3,
    //         }, "<")
    //         .set(loading.current, { display: 'none' })
    //
    // }, { scope: wrapper })

    return (
        <>

            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
            </Head>


            <div ref={wrapper} >
                {/* <div ref={loading} aria-hidden> */}
                {/**/}
                {/*     <div className='fixed top-0 left-0 z-50 h-screen w-screen flex'> */}
                {/*         <div className='bg-black flex-1 sec-1' /> */}
                {/*         <div className='mid-div w-[2px] bg-gray-600/50 absolute top-0 left-1/2 h-screen' /> */}
                {/*         <div className='bg-black flex-1 sec-2' /> */}
                {/*     </div> */}
                {/*     <div className='z-100 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif '> */}
                {/*         <div className='overflow-hidden'> */}
                {/*             <span className='loading-1 font-sans text-sm sm:text-base block '>THE</span> */}
                {/*             <span className='loading-2 block text-4xl sm:text-6xl' >DENTL</span> */}
                {/*             <span className='loading-3 font-sans text-sm sm:text-base block text-right'>STUDIO</span> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </div> */}

                <NavigationBar scrolled={scrolledPastHeader} />

                <header ref={header} className='h-[100svh] overflow-hidden relative'>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black-900"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/matte.jpg"
                        preload='auto'
                    >
                        <source src="/thedentlstudio.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 z-0" />
                    <div className="relative z-10 flex flex-col items-start justify-end h-full p-16 gap-4 max-w-4xl">
                        <div className='overflow-hidden'>
                            <h1 className="hero text-white text-center sm:text-left text-2xl sm:text-5xl font-light font-serif tracking-widest">Smile with Confidence</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='hero text-white text-sm text-center sm:text-left sm:text-lg '>Where innovation meets the senses — personalised, honest, and exceptional care.</p>
                        </div>
                    </div>
                </header>

                <main>
                    <section className='min-h-[90svh] bg-white' id="main">

                        <div className='inset-4 h-full w-full bg-stone-950 p-4 sm:p-16 text-soft-200 '>
                            <h2 className='mb-2 sm:mb-4 text-center sm:text-left'>Our services</h2>
                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='flex-1'>
                                    <h3 className='mb-8 sm:mb-0 text-6xl sm:text-8xl font-serif text-center sm:text-left' >
                                        Certified
                                        <br />
                                        Excellence
                                    </h3>
                                </div>
                                <div className='w-full sm:max-w-sm'>
                                    <p className='text-sm text-justify '>
                                        Experience modern dentistry redefined — from LED whitening in our comfort lounge to advanced veneers and clear aligners. We blend cutting-edge tech with a serene, spa-like atmosphere to make every visit feel indulgent.
                                    </p>
                                    <div className='flex justify-around mt-4 font-bold text-base'>
                                        <button className="group flex items-center gap-1 hover:text-soft-500 relative cursor-pointer">
                                            <ChevronRight
                                                className="absolute -left-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                                                size={20}
                                            />
                                            <span className="transition-all duration-300 group-hover:translate-x-2">
                                                View All Services
                                            </span>
                                        </button>

                                        <button className="group flex items-center gap-1 hover:text-soft-500 relative cursor-pointer">
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

                            <div className='mt-4'>
                                <div className='w-64 h-65 bg-soft-200
                                    clip-service-card
                                    ' >
                                </div>
                            </div>

                        </div>

                    </section>
                </main>
            </div>
        </>
    );
}
