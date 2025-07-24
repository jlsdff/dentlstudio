import { ChevronsUp, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function Footer() {

    const handleScroll = () => {
        scrollToTop();
    }

    return (
        <footer className="min-h-[50svh] relative bg-soft-200 ">

            <div className="flex flex-col md:flex-row px-4 py-16 sm:p-16">
                <div className="flex-1">
                    <div>
                        <img src="/logo.png" alt="The Dentl Studio Logo" className='-mx-5' />
                    </div>
                    <div>
                        <p className="text-sm mt-2 font-semibold tracking-wide max-w-sm">
                            Elevating dental care through honesty, quality, and a refined patient experience.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <a
                            aria-label="Go to our Facebook page"
                            href="https://www.facebook.com/profile.php?id=61561100413918"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Facebook size={18} className="text-soft-200" />
                        </a>
                        <a
                            aria-label="Go to our Instagram page"
                            href="https://www.instagram.com/thedentlstudio"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Instagram size={18} className="text-soft-200" />
                        </a>
                        <a
                            aria-label="Email us"
                            href="mailto:info@thedentlstudio.com"
                            target="_blank"
                            className=" size-8 rounded-full bg-stone-900 flex justify-center items-center ">
                            <Mail size={18} className="text-soft-200" />
                        </a>
                    </div>

                    <div className="mt-4 ">
                        <button
                            className="flex gap-2 items-center px-4 py-2 border rounded-md border-stone-500 cursor-pointer  "
                            onClick={handleScroll}
                        >
                            <ChevronsUp />
                            Back to top
                        </button>
                    </div>
                </div>

                <div className="min-w-[200px] mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold">Useful Links</h3>
                    <ul className='text-lg  '>
                        <li>
                            <a href={route('home')} className="hover:underline duration-900 ease-in " >
                                Homepage
                            </a>
                        </li>
                        <li>
                            <Link
                                href={route('contact-us')}
                                prefetch="hover"
                                className="hover:underline"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('about-us')}
                                className="hover:underline"
                                prefetch="hover"
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('meet-the-team')}
                                prefetch="hover"
                                className="hover:underline"
                            >
                                Meet The Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('gallery')}
                                prefetch="hover"
                                className="hover:underline"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('blogs.index')}
                                prefetch="hover"
                                className="hover:underline"
                            >
                                Blogs
                            </Link>
                        </li>
                    </ul>

                </div>
                {/* Services */}
                <div className="min-w-[200px] mt-4 sm:mt-0">
                    <h3 className="text-xl font-semibold">Services</h3>
                    <ul className='text-lg  '>
                        <li>
                            <Link
                                href={`${route("service")}#general-dentistry`}
                                prefetch='hover'
                                className="hover:underline duration-900 ease-in ">
                                General Dentistry
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${route("service")}#cosmetic-dentistry`}
                                prefetch="hover"
                                className="hover:underline">
                                Cosmetic Dentistry
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${route("service")}#restorative-dentistry`}
                                prefetch='hover'
                                className="hover:underline">
                                Restorative Dentistry
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${route("service")}#oral-surgery`}
                                className="hover:underline">
                                Oral Surgery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${route("service")}#cosmetic-injectables`}
                                className="hover:underline">
                                Cosmetic Injectables & Fillers
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
            <div className="bg-stone-900 w-full min-h-8 py-2 flex flex-col items-center justify-center text-soft-200 ">
                <p className="text-xs">Copyright (c) {new Date().getFullYear()} The Dentl Studio. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

function scrollToTop(duration: number = 2000): void {
    const start: number = window.scrollY || window.pageYOffset;
    const startTime: number = performance.now();

    function easeInOutPower3(t: number): number {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(currentTime: number): void {
        const elapsed: number = currentTime - startTime;
        const progress: number = Math.min(elapsed / duration, 1);
        const ease: number = easeInOutPower3(progress);
        const scrollToY: number = start * (1 - ease);

        window.scrollTo(0, scrollToY);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

