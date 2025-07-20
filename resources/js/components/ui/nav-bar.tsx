import { useGSAP } from "@gsap/react";
import { Link } from "@inertiajs/react"
import { ChevronLeft, Menu, X } from "lucide-react"
import React, { useState, useRef } from "react";
import { gsap } from "gsap"

type NavigationBarProps = {
    scrolled: boolean;
};

export default function NavigationBar({ scrolled }: NavigationBarProps) {

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState<'main' | 'general' | 'restorative' | 'oral' | 'cosmetic'>('main');
    const navMenu = useRef(null);

    const main = useRef<HTMLDivElement>(null);
    const general = useRef<HTMLDivElement>(null);
    const restorative = useRef<HTMLDivElement>(null);
    const oral = useRef<HTMLDivElement>(null);
    const cosmetic = useRef<HTMLDivElement>(null);

    const refs = {
        main,
        general,
        restorative,
        oral,
        cosmetic,
    };

    useGSAP(() => {
        if (!navMenu.current) return;

        // Prevent body scrolling when the navigation menu is open
        document.body.style.overflow = open ? 'hidden' : '';

        if (open) {
            // Animate the overall navigation menu container
            gsap.to(navMenu.current, {
                autoAlpha: 1,
                duration: 0.3,
                ease: 'power3.out'
            });

            // Animate the inner menu items container
            gsap.fromTo('.nav-items', {
                x: -300,
                autoAlpha: 0,
            }, {
                x: 0,
                autoAlpha: 1,
                duration: 1,
                ease: 'power3.out'
            });

            // Animate the main menu items when opening
            // This ensures main items animate in if it's the default view on open
            if (current === 'main' && main.current) {
                requestAnimationFrame(
                    () => {
                        if(!main.current){
                            return
                        }
                        gsap.fromTo(main.current.children, {
                            x: -300,
                            opacity: 0,
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power3.out',
                            stagger: 0.1,
                            delay: 0.1 // Slight delay after the nav-items container starts animating
                        });
                    }
                )
            }

        } else {
            // Animate the overall navigation menu container to hide
            gsap.to(navMenu.current, {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power3.in',
                onComplete: () => setCurrent('main') // Reset to main when closing
            });
            // Animate the inner menu items container to hide
            gsap.fromTo('.nav-items', {
                x: 0,
                autoAlpha: 1,
            }, {
                autoAlpha: 0,
                x: -300,
                duration: 0.3,
                ease: 'power3.in'
            });
        }
    }, { dependencies: [open], scope: navMenu });

    // GSAP animation for switching between different service lists
    useGSAP(() => {
        // Hide all menu sections initially
        Object.values(refs).forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, { display: 'none' });
            }
        });

        const currentRef = refs[current].current;
        const items = `.${current}-items`;

        if (currentRef) {
            // Show the current section
            gsap.set(currentRef, { display: 'block' });

            // Animate the items in the current section
            gsap.fromTo(items, {
                x: current === 'main' ? -300 : 300, // Animate main from left, others from right
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1,
            });
        }
    }, { dependencies: [current] }); // Re-run this effect when 'current' state changes


    return (
        <nav
            className="fixed top-0 left-0 z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center w-screen text-white overflow-y-hidden shadow-sm"
        >
            <div
                className={`absolute inset-0 z-[-1] transition-opacity duration-700 ease-in-out
                  bg-[url('/black-linen.png'),linear-gradient(to_bottom_right,#1d1a18,#44413c)]
                  bg-blend-overlay
                  ${scrolled ? 'opacity-100' : 'opacity-0'}
                `}
            />
            {/*<div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-amber-900 to-stone-950 z-39*/}
            {/*${scrolled ? 'opacity-100' : 'opacity-0'}*/}
            {/*`} />*/}
            {/*<img src="/light-paper-fibers.png" alt="" className={`absolute bottom-0*/}
            {/* left-0 w-full duration-500 ease-in-out object-cover z-41 ${scrolled ? 'opacity-20' : 'opacity-0'}`} />*/}

            <div className="group overflow-y-hidden z-42">
                <button onClick={() => setOpen(!open)} className="cursor-pointer nav-item flex gap-2 items-center">
                    <Menu />
                    <span className={`relative text-sm after:content-[''] after:block after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-out
                        after:bg-white`}>
                        Menu
                    </span>
                </button>
            </div>

            <div className="overflow-y-hidden z-42">
                <Link href="/">
                    <img
                        src="/logo.png"
                        alt="the dentl studio"
                        className={`w-24 sm:w-32 filter nav-item inline-block invert`}
                    />
                </Link>
            </div>

            <div className="overflow-y-hidden z-42 p-1">
                <div className="nav-item">
                    <a
                        className={`px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                        href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                        target="_blank"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            <div ref={navMenu} id="nav-menu"
                className="fixed w-screen h-screen top-0 left-0 bg-soft-500/10 backdrop-blur z-100 bg-black/30 opacity-0 invisible">
                <div className="nav-items w-full md:w-1/3 h-screen p-6 bg-stone-950 ">

                    <button className="flex gap-2 items-center w-full text-lg mb-12 cursor-pointer" onClick={() => setOpen(prev => !prev)}>
                        <X size={16} />
                        <span className="text-base">Close</span>
                    </button>

                    <div className="relative h-full ">

                        {/* Main Menu */}
                        <div ref={main} className="absolute top-0 left-0 w-full h-full">
                            <ul className="text-2xl tracking-widest font-bold ">
                                <li className="main-items text-xs mb-3 text-soft-200/80">Our Services</li>
                                <div className="space-y-4">
                                    <li className="main-items text-soft-200 hover:text-white" >
                                        <button className="cursor-pointer" onClick={() => setCurrent('general')}>General Dentistry</button>
                                    </li>
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer" >
                                        <button className="cursor-pointer" onClick={() => setCurrent('cosmetic')}>Cosmetic Dentistry</button>
                                    </li>
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer ">
                                        <button className="cursor-pointer" onClick={() => setCurrent('restorative')}>Restorative Dentistry</button>
                                    </li>
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer ">
                                        <button className="cursor-pointer" onClick={() => setCurrent('oral')}>Oral Surgery</button>
                                    </li>
                                </div>
                                <li className="main-items text-xs mt-8 mb-3 text-soft-200/80">More about us</li>
                                <div className="space-y-4">
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer ">
                                        <Link href={route('contact-us')} prefetch="hover">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer ">
                                        <Link href={route('about-us')} prefetch={"hover"} >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="main-items text-soft-200 hover:text-white cursor-pointer ">
                                        <Link href={route('blogs.index')} prefetch="hover">
                                            Blogs
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        {/* General Dentistry Sub-menu */}
                        <div ref={general} className="absolute top-0 left-0 w-full h-full" style={{ display: 'none' }}> {/* Initially hidden */}
                            <ul className="space-y-4 text-2xl tracking-widest font-bold ">
                                <div className="general-items">
                                    <button onClick={() => setCurrent('main')} className="flex gap-2 items-center text-base cursor-pointer group transition-all duration-300 ease-out">
                                        <ChevronLeft size={18} className="group-hover:translate-x-[8px] transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-[8px] transition-all duration-300 ease-out">
                                            General Dentistry
                                        </span>
                                    </button>
                                </div>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('emergency-dentistry')} prefetch="hover" >Emergency Dentistry</Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('checkup-and-cleans')} prefetch="hover" >
                                        Checkup and Cleans
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('teeth-grinding')} prefetch="hover" >
                                        Teeth Grinding
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('tmj-treatment')} prefetch="hover">
                                        TMJ Treatment
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('root-canal')} prefetch="hover">
                                        Root Canals
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('sports-mouthguard')} prefetch="hover">
                                        Sports Mouthguards
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('childrens-dentistry')} prefetch="hover">
                                        Children&apos;s Dentistry
                                    </Link>
                                </li>
                                <li className="general-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('screening-for-oral-cancer')} prefetch="hover">
                                        Oral Cancer Screenings
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Cosmetic Dentistry Sub-menu */}
                        <div ref={cosmetic} className="absolute top-0 left-0 w-full h-full" style={{ display: 'none' }}> {/* Initially hidden */}
                            <ul className="space-y-4 text-2xl tracking-widest font-bold ">
                                <div className="cosmetic-items">
                                    <button onClick={() => setCurrent('main')} className="flex gap-2 items-center text-base cursor-pointer group transition-all duration-300 ease-out">
                                        <ChevronLeft size={18} className="group-hover:translate-x-[8px] transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-[8px] transition-all duration-300 ease-out">
                                            Cosmetic Dentistry
                                        </span>
                                    </button>
                                </div>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('veneers')} prefetch="hover">
                                        Veneers
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('veneers')} prefetch="hover">
                                        Teeth Whitening
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('smile-makeover')} prefetch="hover">
                                        Smile Makeover
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('clear-aligners')} prefetch="hover">
                                        Clear Aligners
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-bonding')} prefetch="hover">
                                        Dental Bonding
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('crown-lengthening')} prefetch="hover">
                                        Crown Lengthening
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-contouring')} prefetch="hover">
                                        Dental Contouring
                                    </Link>
                                </li>
                                <li className="cosmetic-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('cosmetic-injectables')} prefetch="hover">
                                        Cosmetic Injectables and Fillers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Restorative Dentistry Sub-menu */}
                        <div ref={restorative} className="absolute top-0 left-0 w-full h-full" style={{ display: 'none' }}> {/* Initially hidden */}
                            <ul className="space-y-4 text-2xl tracking-widest font-bold ">
                                <div className="restorative-items">
                                    <button onClick={() => setCurrent('main')} className="flex gap-2 items-center text-base cursor-pointer group transition-all duration-300 ease-out">
                                        <ChevronLeft size={18} className="group-hover:translate-x-[8px] transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-[8px] transition-all duration-300 ease-out">
                                            Restorative Dentistry
                                        </span>
                                    </button>
                                </div>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-fillings')} prefetch="hover">
                                        Dental Fillings
                                    </Link>
                                </li>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('inlays-and-onlays')} prefetch="hover">
                                        Inlays and Onlays
                                    </Link>
                                </li>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-crowns')} prefetch="hover">
                                        Dental Crowns
                                    </Link>
                                </li>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-bridges')} prefetch="hover">
                                        Dental Bridges
                                    </Link>
                                </li>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-implants')} prefetch="hover">
                                        Dental Implants
                                    </Link>
                                </li>
                                <li className="restorative-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dentures')} prefetch="hover">
                                        Dentures
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Oral Surgery Sub-menu */}
                        <div ref={oral} className="absolute top-0 left-0 w-full h-full" style={{ display: 'none' }}> {/* Initially hidden */}
                            <ul className="space-y-4 text-2xl tracking-widest font-bold ">
                                <div className="oral-items">
                                    <button onClick={() => setCurrent('main')} className="flex gap-2 items-center text-base cursor-pointer group transition-all duration-300 ease-out">
                                        <ChevronLeft size={18} className="group-hover:translate-x-[8px] transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-[8px] transition-all duration-300 ease-out">
                                            Oral Surgery
                                        </span>
                                    </button>
                                </div>
                                <li className="oral-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('extractions')} prefetch="hover">
                                        Extractions
                                    </Link>
                                </li>
                                <li className="oral-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('wisdom-teeth-removal')} prefetch="hover">
                                        Wisdom Teeth Removal
                                    </Link>
                                </li>
                                <li className="oral-items text-soft-100 hover:text-white cursor-pointer " >
                                    <Link href={route('dental-implant-replacement-services')} prefetch="hover">
                                        Implant Replacement
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}
