import Image from 'next/image'
import React from 'react'

export default function HomeMenu() {
    return (
        <section>
            <div className='text-center'>

                <h3 className='uppercase text-gray-500 font-semibold leading-3'>Check out</h3>
                <h2 className='text-primary relative font-bold text-2xl'>
                    Menu
                    <div className='absolute -top-[80px] opacity-30 right-0'>
                        <Image src={'/tomato.png'} alt='tomato' width={200} height={200} />
                    </div>
                    <div className='absolute opacity-30 rotate-6 -top-14 left-0'>
                        <Image src={'/lattice.png'} alt='tomato' width={200} height={200} />
                    </div>
                </h2>
            </div>
        </section>
    )
}
