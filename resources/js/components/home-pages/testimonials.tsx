import { ChevronLeft, ChevronRight, Home, LucideMail, LucidePhoneCall, Star } from 'lucide-react';
import {Link} from '@inertiajs/react'
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonyType {
    name: string;
    review: string;
    avatarUrl: string;
}

const clients:TestimonyType[] = [
    {
        name: 'Rosalina Barrairo',
        review: 'Professional and very caring staff! Child friendly environment.\n' +
            'My 11 yr old daughter never had a successful dental cleaning before.  Our visit to the The Dentl Studio is a game changer!  Full check and cleaning done with hardly any fuss.  Thanks to Alima\'s gentle and caring nature.  Also to her young but very efficient and bubbly dental assistant.\n',
        avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLxi0nG_eA701mdpgBIJez5TdMVw6VRo7sxDGcvCWJMUvvXPw=w43-h43-p-rp-mo-br100',

    },
    {
        name: 'Alima',
        review: 'What a great experience I had at The Dentl Studio! Such a friendly team and aesthetic clinic that catered to my needs. The dentist was super professional and informative. Will definitely be back soon 👌🏻',
        avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocK9SH5RpGGVKmsCV5VzU3ZNKmu5qbdPRtlrRNn5XdP3Mc3NWjw=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Suden Karslioglu',
        review: 'This is the best dental practice! everyone at the Dentl Studio is so kind and welcoming, they make sure you’re comfortable and offer extra services if you need extra comfort! i also love their brand water cans, and they have the most gorgeously designed boutique!\n',
        avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWAClo2xdk6TG0FYI3BKqVTDCZp37rmlpp3KGIRz5oNm9nS7_U=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Jasmine Barker',
        review: 'I recently had a checkup and clean, the team was super friendly, the service was really thorough and I left with feeling fresh and well looked after!',
        avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocL9d6DG1V2VsVXLJT5WCg78iRuZ622ZQFKc4txwsOM2qUfx7w=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Chadhi Ramesh',
        review: 'I went in for a filling today and i was so nervous but my dentist made me feel much calmer and the whole process was super smooth and comfortable, couldn’t recommend the Dentl Studio more!!',
        avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUgdurlPAQ_Yzu307xqqZgvi9FXMUxPQkYScowh-MMUwYkLr7oc=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Seema Tandon',
        review: 'I would highly recommend this dental practice. The service was gentle, caring and efficient including supporr and admin/reception staff. Nice professional surroundings too',
        avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVXaPQ30YpHX7-P8UL-DmCM2dIL1zUtEnUQKsyZ26wKIM1MAWT-=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Kim Chan',
        review: 'look at how stunning this place is!! Took my dental experience to a whole other level! Definitely recommend a visit to The Dentl Studio',
        avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjV3RMayRC7ZMwwqXzjvOZ7d-pynfcjbHfRFWJN1Gyxgg4m_bvZq=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Brandon Francis',
        review: 'Would highly recommend! The team were friendly, thorough and very informative. Will definitely be a returning customer.',
        avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLARRtM9tgeasZuFOoBsAu2ddat-3ZKYAB5hZa8HuxKog4l4g=w43-h43-p-rp-mo-br100'
    },
    {
        name: 'Ambika Bhusal',
        review: 'Very happy with the service and friendly customer service. Doctor and nurses are very kind , lovely and made me feel good and relax during my extractions. Doctor explain everything very thoroughly and highly recommend him and the team. Thank you for good service.',
        avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKXMFn9SvhbSiGL3oTKYKvQUnguJPie4o3yXle3PHRfD31AxA=w43-h43-p-rp-mo-br100'
    }
]

export default function Testimonials() {

    const [api, setApi] = useState<CarouselApi>()

    const onNext = () => {
        if(!api) {
            alert('tang ina')
            return
        }
        api.scrollNext()
    }

    const onPrev = () => {
        if(!api) {
            alert('tang ina')
            return
        }
        api.scrollPrev()
    }

    return (
        <>
            <Carousel
                opts={{loop: true, align: 'start'}}
                setApi={setApi}
                className='min-h-[90svh] px-4 py-16 sm:p-16
                bg-gradient-to-b from-stone-950 to-soft-200 text-soft-200' >

                <div className="flex justify-between items-center" >
                    <div className="flex-1" >
                        <h2 className="service-text mb-2 text-3xl sm:text-6xl font-serif text-center sm:text-left text-soft-300" >
                            What Our Clients Say
                        </h2>
                        <p className="text-center sm:text-left mb-4">
                            Real stories from patients who trusted us with their smiles—hear their experiences and results.
                        </p>
                    </div>
                    <div className="space-x-4 hidden md:inline-block">
                        <Button
                            variant='ghost'
                            onClick={() => onPrev()}
                        >
                            <ChevronLeft />
                        </Button>
                        <Button
                            variant='ghost'
                            onClick={() => onNext()}
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>

                <div>
                    <CarouselContent>
                        {
                            clients.map( (testimony, index) => (
                                <CarouselItem key={index} className="md:basis-1/3">
                                    <TestimonyCard testimony={testimony} />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </div>

                <div className="md:hidden w-full flex justify-center gap-2 mt-4">
                    <Button
                        variant='ghost'
                        onClick={() => onPrev()}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant='ghost'
                        onClick={() => onNext()}
                    >
                        <ChevronRight />
                    </Button>
                </div>



            </Carousel >
        </>
    )
}

function TestimonyCard({testimony}:{testimony:TestimonyType}) {

    return (
        <Card className="bg-soft-100 h-full">
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={testimony.avatarUrl} alt={testimony.name} />
                            <AvatarFallback>{testimony.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-stone-700">{testimony.name}</h4>
                            <div className="flex gap-1">
                                <Star className="fill-amber-300 text-amber-300" size={12} />
                                <Star className="fill-amber-300 text-amber-300" size={12} />
                                <Star className="fill-amber-300 text-amber-300" size={12} />
                                <Star className="fill-amber-300 text-amber-300" size={12} />
                                <Star className="fill-amber-300 text-amber-300" size={12} />
                            </div>
                        </div>
                    </div>
                        <div>
                            <a
                                href="https://www.google.com/maps/place/The+Dentl+Studio/@-38.0932259,145.3273963,13.61z/data=!4m14!1m5!8m4!1e1!2s116552269580000845494!3m1!1e1!3m7!1s0x6ad61bf8c629a41f:0xedc2e72cfb1403d6!8m2!3d-38.0951963!4d145.3425676!9m1!1b1!16s%2Fg%2F11ltws4n6v?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm line-clamp-7" >
                    {
                        testimony.review
                    }
                </p>
            </CardContent>
        </Card>
    )
}
