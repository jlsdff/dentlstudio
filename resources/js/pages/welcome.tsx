import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {

    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
            </Head>
            <div className="">
                <nav className="fixed top-0 left-0 z-10 bg-transparent px-6 py-4">
                    <div className="text-white text-xl font-semibold">The Dentl Studio</div>
                </nav>
                <header className='h-[100svh] overflow-hidden relative'>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/fallback.jpg"
                    >
                        <source src="/thedentlstudio.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 z-0" />
                    <div className="relative z-10 flex flex-col items-start justify-end h-full p-16 gap-4 max-w-4xl">
                        <h1 className="text-white text-2xl sm:text-5xl font-light font-serif tracking-widest">Smile with Confidence</h1>
                        <div>
                            <p className='text-white text-sm sm:text-lg '>Where innovation meets the senses — personalised, honest, and exceptional care.</p>
                        </div>
                        <div>
                            <a
                                className='px-4 py-2 border text-white'
                                target='_blank'
                                href="https://www.corepractice.is/practices/thedentlstudio/the-dentl-studio#/"
                            >Book now</a>
                        </div>
                    </div>
                </header>
                <main>
                    <section className='h-[100svh]'>
                        <h2 className='text-center text-2xl sm:text-5xl font-serif tracking-widest my-8'>The Dentl Studio</h2>
                    </section>
                </main>
            </div>
        </>
    );
}
