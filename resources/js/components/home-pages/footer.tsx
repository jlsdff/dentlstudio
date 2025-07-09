import { ArrowUp, ChevronsUp, Facebook, Instagram, Mail } from "lucide-react";
import { gsap } from "gsap"

export default function Footer() {
    return (
        <footer className="min-h-[50svh] relative bg-soft-200 ">

            <div className="flex flex-col md:flex-row px-4 py-16 sm:p-16">
                <div className="flex-1">
                    <div>
                        <img src="/logo.png" alt="The Dentl Studio Logo" />
                    </div>
                    <div>
                        <p className="text-sm mt-2 font-semibold tracking-wide max-w-sm">
                            Elevating dental care through honesty, quality, and a refined patient experience.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <a
                            href="https://www.facebook.com/profile.php?id=61561100413918"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Facebook size={18} className="text-soft-200" />
                        </a>
                        <a
                            href="https://www.instagram.com/thedentlstudio"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Instagram size={18} className="text-soft-200" />
                        </a>
                        <a
                            href="mailto:info@thedentlstudio.com"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Mail size={18} className="text-soft-200" />
                        </a>
                    </div>

                    <div className="mt-4 ">
                        <button
                            className="flex gap-2 items-center px-4 py-2 border rounded-md border-stone-500 cursor-pointer  "
                            onClick={() => {
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: {
                                        y: 0
                                    },
                                    ease: 'power3.out'
                                })
                            }}
                        >
                            <ChevronsUp />
                            Back to top
                        </button>
                    </div>
                </div>
                <div className="min-w-xs">
                    <h3 className="text-lg font-semibold">Sitemap</h3>
                    <ul>
                        <li>
                            <a href="" className="hover:underline" >
                                Homepage
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-xs">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <ul>
                        <li>
                            <a href="" className="hover:underline" >
                                Homepage
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-stone-900 w-full min-h-8 py-2 flex flex-col items-center justify-center text-soft-200 ">
                <p className="text-xs">Copyright (c) {new Date().getFullYear()} The Dentl Studio. All Rights Reserved.</p>
                <p className="text-xs">Developed by Julius Terrence Duff</p>
            </div>
        </footer>
    )
}

