import { Head } from "@inertiajs/react";
import { useEffect, useRef, useState, lazy } from "react";
import Footer from '@/components/home-pages/footer';

const PopUp = lazy(() => import('@/components/ui/PopUp'))
const NavigationBar = lazy(() => import('@/components/ui/nav-bar'))

interface StaffInterface {
    name: string;
    position: string;
    bio: string;
    avatarUrl: string;
}

const staffs: StaffInterface[] = [
    {
        name: 'Jasmine Garcia',
        position: 'Founder',
        bio: 'Jasmine brings a fresh and thoughtful approach to the way The Dentl Studio operates. Noticing gaps in the industry she set out to create something different: a space that truly puts patients first. Her mission is to reinvent the patient experience from the ground up, blending expertise with a personal touch to raise the standard of care across the board.',
        avatarUrl: '/staffs/Jasmine.png'
    },
    {
        name: 'Elijah Dijamco',
        position: 'Business Manager',
        bio: 'Elijah is the engine behind the scenes, making sure everything runs smoothly day to day. From managing backend systems to supporting the team’s culture, he’s all about keeping things efficient, organised, and aligned with the clinic’s values. His calm, considered approach helps create a space where both the team and patients feel supported.',
        avatarUrl: '/staffs/Elijah.png'
    },
    {
        name: 'Alima Malakyar',
        position: 'Oral Health therapist',
        bio: 'Alima plays a key role in ensuring our patients maintain great oral health. From preventive care to restorative treatments for children, she’s passionate about making sure every patient understands their oral health journey. With a gentle approach and a calming presence, Alima helps patients feel comfortable, cared for, and confident every step of the way.',
        avatarUrl: '/staffs/Alima.png'
    },
    {
        name: 'Devna Dayal',
        position: 'Dentist',
        bio: 'Devna is all about delivering high-quality dental care with heart. Whether it’s general, cosmetic, or emergency treatment, her mission is simple: make sure every patient feels informed, empowered, and totally at ease. She takes the time to educate and explain, helping patients feel confident in their care every step of the way.',
        avatarUrl: '/staffs/Devna.png'
    },
    {
        name: 'Sheena Sidhu',
        position: 'Cosmetic Nurse',
        bio: 'Sheena brings years of experience in cosmetic nursing and a sharp eye for natural, balanced results. At our clinic, we believe in overall facial harmony and having Sheena on the team means we can offer patients a truly comprehensive experience. Her approach is all about enhancing what’s already there, with subtlety, care, and confidence.',
        avatarUrl: '/staffs/Sheena.png'
    },
    {
        name: 'Nishani Ramaneithasan',
        position: 'Practice Manager',
        bio: 'With over 12 years of experience in both management and clinical settings, Nishani brings a wealth of knowledge (and calm confidence) to the clinic. She’s the glue that holds everything together, making sure the day flows smoothly, the team feels supported, and our patients always receive the highest standard of care. A true all-rounder, she’s a fundamental part of keeping our vision alive.',
        avatarUrl: '/staffs/placeholder.png'
    },
    {
        name: 'Suden Karslioglu',
        position: 'Dental Nurse',
        bio: 'Suden is our much loved dental nurse, though she\'s new to the industry there\'s no doubt she hit the ground running. With a natural energy for patient care and a growing passion for dentistry, she’s become an essential part of the team. Her warmth, dedication, and commitment to every patient make her someone people instantly feel comfortable with.',
        avatarUrl: '/staffs/placeholder.png'
    }
]

export default function AboutUs() {

    const [scrolledPastHeader, setScrolledPastHeader] = useState(false)
    const header = useRef<HTMLHeadElement>(null)

    const title = "Meet The Team Behind The Dentl Studio"
    const description = "Get to know the passionate dental professionals who make your smile their mission. Our skilled and caring team in Clyde North is dedicated to delivering exceptional care with a personal touch—every visit, every time."

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
            <Head title="Meet the Team of The Dentl Studio">

                <meta name="description" content="At The Dentl Studio, we combine innovation, precision, and compassion to deliver elevated dental experiences. Learn more about our story, values, and commitment to exceptional care." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thedentlstudio.com/meet-the-team" />

                <meta property="og:title" content="Meet the Team of The Dentl Studio | Trusted Dentist in Clyde North" />
                <meta property="og:description" content="At The Dentl Studio, we combine innovation, precision, and compassion to deliver elevated dental experiences. Learn more about our story, values, and commitment to exceptional care." />
                <meta property="og:image" content="https://thedentlstudio.com/photos/thedentlstudio.jpg" />
                <meta property="og:url" content="https://thedentlstudio.com/meet-the-team" />
                <meta property="og:type" content="website" />

                <link
                    rel="preload"
                    as="image"
                    href="/social-staff-ad.webm"
                    fetchPriority="high"
                />
            </Head>

            <NavigationBar scrolled={scrolledPastHeader} />


            <header ref={header} className="
                 text-soft-200 h-[100svh]
                grid grid-cols-1 md:grid-cols-8
                ">

                <div className="hidden md:flex md:col-span-5 p-8 sm:p-16 flex-col justify-end gap-4 relative
                    bg-gradient-to-tr from-stone-950 to-stone-800">

                    <h1 className="text-4xl md:text-5xl font-serif z-10">{title}</h1>
                    <p className="z-10">
                        {description}
                    </p>
                    <img src="/frosted.jpg" className="absolute w-full h-full object-cover top-0 left-0 mix-blend-multiply
                        z-0" alt="frosted texture" aria-hidden />

                </div>

                <div className="md:col-span-3 overflow-y-hidden relative">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/thedentlstudio.jpg"
                        preload="metadata"
                        aria-hidden="true"
                    >
                        <source src="/social-staff-ad.webm" type="video/webm" />
                    </video>
                    <div className="absolute inset-0 w-full h-full flex md:hidden flex-col items-center justify-end p-8
                        text-center gap-4 bg-gradient-to-t from-stone-950 to-transparent">
                        <h1 className="text-4xl md:text-5xl font-serif z-10">{title}</h1>
                        <p className="z-10">
                            {description}
                        </p>
                        <div className="z-10">
                            <a
                                aria-label="Book an appointment at The Dentl Studio"
                                className={`px-4 py-2 text-sm rounded-md bg-soft-800 text-soft-100 hover:bg-soft-900 transition-all duration-300 shadow-lg`}
                                href='https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/'
                                target="_blank"
                            >
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                </div>

            </header>

            <main className="bg-soft-200 p-8 md:p-16">

                <PopUp />

                <div className='pt-8 flex flex-col md:flex-row items-center md:items-end'>
                    <div className='p-5 flex-1'>
                        <h3 className='text-3xl md:text-7xl font-serif text-center md:text-left'>Meet Our Dedicated Experts</h3>
                    </div>
                    <div className='text-center max-w-sm'>
                        <p className='text-xs tracking-wider text-center'>We’re a passionate, patient-centred team dedicated to re-inventing your experience and upholding the standard of care. Each of us brings something unique to the clinic; from clinical expertise to a strong focus on comfort, communication, and connection. Together, we’re here to make every visit feel easy, informed, and genuinely welcoming. Get to know the people behind The Dentl Studio.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    {
                        staffs.map((staff, index) => (
                            <StaffCard staff={staff} key={index} />
                        ))
                    }
                </div>

            </main>
            <Footer />

        </>
    )
}

function StaffCard({ staff }: { staff: StaffInterface }) {

    return (
        <div className="flex flex-col md:flex-row p-4 rounded-lg gap-4 border border-soft-300 shadow-md
            bg-gradient-to-t from-soft-200 to-soft-300
        ">
            <div className="flex justify-center items-end flex-shrink-0
                bg-gradient-to-tr from-soft-500 to-transparent rounded-xl
            ">
                <img
                    className="w-[150px] md:w-[150px] shrink-0 object-cover rounded-md"
                    src={staff.avatarUrl}
                    alt={staff.name} />
            </div>
            <div>
                <h4 className="text-center md:text-left text-lg font-semibold text-stone-800">{staff.name}</h4>
                <h5 className="text-center md:text-left text-xs  text-stone-500">{staff.position}</h5>
                <p className="text-center md:text-left text-sm" >{staff.bio}</p>
            </div>
        </div>
    )
}

