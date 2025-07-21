import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function PopUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`
        fixed bottom-4 right-4 z-50 transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
        >
            <Link
                href={route('new-patients')}
                className="
          flex h-20 w-20 items-center justify-center
          rounded-full
          bg-soft-800 text-soft-100
          border border-stone-500
          text-center text-[10px] font-semibold leading-tight
          px-2
          shadow-lg
          animate-pulse-scale
        "
            >
                GAP FREE<br />CHECK UP
            </Link>
        </div>
    );
}
