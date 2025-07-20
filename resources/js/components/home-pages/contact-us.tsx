import { Home, LucideMail, LucidePhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactUs() {

    return (
        <>
            <section className='min-h-[90svh] px-4 py-16 sm:p-16 bg-stone-950 text-soft-200'>

                <div className='mb-8'>
                    <h2 className='text-center sm:text-left'>Contact Us</h2>
                    <h3 className=' mt-4 text-4xl sm:text-5xl font-semibold font-serif text-center sm:text-left tracking-wider'>
                        Get in Touch with Our Team
                    </h3>
                    <div className='mt-2'>
                        <p>
                            We're here to assist you every step of the way. Whether you have questions, feedback,
                            or are interested in collaborating, don't hesitate to reach out.
                        </p>
                    </div>

                    <a
                        aria-label="Book an appointment at The Dentl Studio"
                        className={`mb-4 mt-4 px-4 py-2 inline-block text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                        href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                        target="_blank"
                    >
                        Book an Appointment
                    </a>


                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                    <div>
                        <h3 className="text-2xl mb-2 font-bold">Prefer a Direct Approach?</h3>
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
                        <div className="mt-4">
                            <h3 className="text-2xl mb-2 font-bold">Opening Hours</h3>
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
                                    <p>9:00 AM - 4:00 PM</p>
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
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15500.423401945398!2d145.33738347383286!3d-38.0954960569307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61bf8c629a41f%3A0xedc2e72cfb1403d6!2sThe%20Dentl%20Studio!5e0!3m2!1sen!2sph!4v1752074148274!5m2!1sen!2sph"
                            width="600"
                            height="450"
                            className='w-full rounded-xl'
                            style={{ border: "0px" }}
                            allowFullScreen={true}
                            loading="lazy"
                                title="The Dentl Studio location in google maps"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>

                </div>

            </section >
        </>
    )
}
