export default function AboutUs() {
    return (

        <main>
            <div className='flex flex-col sm:flex-row justify-between mt-12'>
                <div className='max-w-sm flex flex-col justify-end order-2 sm:order-1 mt-8 text-center '>
                    <p className='text-sm tracking-wider'>Highly skilled and compassionate professionals ready to care for you.</p>
                </div>
                <div className='flex-1 order-1 sm:order-2'>
                    <h2 className='text-6xl sm:text-8xl font-serif text-center sm:text-right'>Meet Our Dedicated Experts</h2>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 mt-12'>

                <div className='relative p-4'>

                    <div className="flex justify-center bg-gradient-to-t from-stone-400 to-transparent rounded-xl ">
                        <img className='' src="/staffs/dentist_1.png" alt="" />
                    </div>

                    <div className='p-2 rounded-sm mt-2'>
                        <h3 className='font-bold text-lg '>Dr. John Doe</h3>
                        <h4>Dentist</h4>
                    </div>

                </div>

                <div className='relative p-4'>

                    <div className="flex justify-center bg-gradient-to-t from-stone-400 to-transparent rounded-xl ">
                        <img className='' src="/staffs/dentist_2.png" alt="" />
                    </div>

                    <div className='p-2 rounded-sm mt-2'>
                        <h3 className='font-bold text-lg '>Dr. John Doe</h3>
                        <h4>Dentist</h4>
                    </div>

                </div>

                <div className='relative p-4'>

                    <div className="flex justify-center bg-gradient-to-t from-stone-400 to-transparent rounded-xl ">
                        <img className='' src="/staffs/dentist_3.png" alt="" />
                    </div>

                    <div className='p-2 rounded-sm mt-2'>
                        <h3 className='font-bold text-lg '>Dr. John Doe</h3>
                        <h4>Dentist</h4>
                    </div>

                </div>

            </div>
        </main>

    )
}

