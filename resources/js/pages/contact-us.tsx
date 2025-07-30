import { useRef, useEffect, useState, FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollToPlugin from 'gsap/src/ScrollToPlugin';
import Footer from "@/components/home-pages/footer";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Home, LoaderCircle, LucideMail, LucidePhoneCall } from 'lucide-react';
import { lazy } from 'react'

const PopUp = lazy(() => import('@/components/ui/PopUp'))
const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

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
            <Head title="Contact Us ">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

                <meta name="description" content="Get in touch with The Dentl Studio in Clyde North. Book an appointment, ask a question, or find our clinic location and hours.  " />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thedentlstudio.com/contact-us" />

                <meta property="og:title" content=" Contact The Dentl Studio - The Dentl Studio" />
                <meta property="og:description" content="Get in touch with The Dentl Studio in Clyde North. Book an appointment, ask a question, or find our clinic location and hours.  " />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://www.thedentlstudio.com/contact-us" />
                <meta property="og:type" content="website" />
            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />

            <header
                ref={header}
                className="
                bg-stone-950 text-soft-200 min-h-[50svh]
                flex flex-col justify-end items-center
                p-8 md:pt-18 gap-4 relative overflow-hidden
                "
            >
                <h1 className="  text-center sm:text-left text-4xl sm:text-5xl font-light font-serif tracking-widest" >
                    Get in touch with us
                </h1>
                <p>Fill out the form below or schedule a meeting with us at your convenience.</p>
            </header>
            <main >

                <PopUp />

                <section className="min-h-[90svh] text-stone-950 bg-soft-200 p-8 md:p-16
                    grid grid-cols-1 md:grid-cols-6 gap-8 tracking-widest">

                    <div className="md:col-span-2" >
                        <h2 className="text-2xl mb-2 font-semibold ">Let's Talk!</h2>
                        <p className="mb-4" >Get in touch with us using the enquiry form or contact details below</p>
                        <ContactUsForm />
                    </div>

                    <div className="md:col-span-4" >

                        <div className="grid grid-cols-1 md:grid-cols-2">

                            <div>
                                <h2 className="text-2xl mb-2 font-semibold">Prefer a Direct Approach?</h2>
                                <div className="space-y-2">
                                    <div className="flex gap-2 items-center">
                                        <LucidePhoneCall size={16} className="text-soft-500" />
                                        <p className="text-sm">+61 3 7050 3943</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <LucideMail size={16} className="text-soft-500" />
                                        <p className="text-sm">info@thedentlstudio.com</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Home size={16} className="text-soft-500" />
                                        <p className="text-sm">
                                            65 Matterhorn drive, Clyde North
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div >
                                    <h2 className="text-2xl mb-2 font-bold">Opening Hours</h2>
                                    <div className="flex gap-4 max-w-sm">
                                        <div className="flex-1">
                                            <p>Monday - Wednesday</p>
                                        </div>
                                        <div>
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 max-w-sm">
                                        <div className="flex-1">
                                            <p>Thursday</p>
                                        </div>
                                        <div>
                                            <p>9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 max-w-sm">
                                        <div className="flex-1">
                                            <p>Friday</p>
                                        </div>
                                        <div>
                                            <p>9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 max-w-sm">
                                        <div className="flex-1">
                                            <p>Saturday</p>
                                        </div>
                                        <div>
                                            <p>9:00 AM - 1:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15500.423401945398!2d145.33738347383286!3d-38.0954960569307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61bf8c629a41f%3A0xedc2e72cfb1403d6!2sThe%20Dentl%20Studio!5e0!3m2!1sen!2sph!4v1752074148274!5m2!1sen!2sph"
                                width="600"
                                height="300"
                                className='w-full rounded-xl'
                                style={{ border: "0px" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </div>
                </section>

            </main >
            <Footer />
        </>
    )
}

type ContactUsForm = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}
function ContactUsForm() {

    const { data, setData, post, processing, errors, reset } = useForm<Required<ContactUsForm>>({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    })

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log("contact us form: ", data)

        post(route('contact-us.store'), {
            onSuccess: () => {
                reset();
                alert("Thank you for reaching out! We've" +
                    " received your message and will get back to you as soon as possible. In the meantime, feel free to browse" +
                    " our site or follow us on social media for updates.")
            }
        })

    }

    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Label className="text-xs" htmlFor="firstname" >First Name</Label>
                    <Input id="firstname"
                        name="firstname"
                        placeholder="John"
                        className="border border-stone-900  focus-visible:border-stone-950"
                        value={data.firstname}
                        onChange={e => setData('firstname', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label className="text-xs" htmlFor="lastname" >Last Name</Label>
                    <Input id="lastname"
                        name="lastname"
                        placeholder="Doe"
                        className="border border-stone-900  focus-visible:border-stone-950"
                        value={data.lastname}
                        onChange={e => setData('lastname', e.target.value)}
                        required
                    />
                </div>
            </div>

            <div>
                <Label className="text-xs" htmlFor="email" >Email</Label>
                <Input
                    type="email"
                    autoComplete="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="border border-stone-900  focus-visible:border-stone-950"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label className="text-xs" htmlFor="message" >Message</Label>
                <Textarea
                    rows={3}
                    className="border border-stone-900  focus-visible:border-stone-950"
                    id="message"
                    name="message"
                    placeholder="Enter your message."
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
                    required
                >
                </Textarea>
            </div>
            <div>
                <Button className="bg-stone-800 w-full" disabled={processing} >
                    {processing && <LoaderCircle className="animate-spin" />}
                    Send your message
                </Button>
            </div>
        </form>
    )
}

