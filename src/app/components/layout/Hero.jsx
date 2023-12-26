import Image from 'next/image'
import React from 'react'
import FilledButton from '../FilledButton';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className='grid grid-cols-2 items-center justify-center'>
            {/********** HERO TEXT *********/}
            <div className='my-12'>
                <h1 className='leading-[3rem] text-4xl font-semibold'>Everything <br></br> is better <br></br> with a <span className='text-primary'>Pizza</span>!</h1>
                <p className='my-4 text-gray-500'>
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life.
                </p>
                <div className='flex gap-4 mt-12 text-sm'>
                    <FilledButton classes={'flex gap-2 items-center'}>Order now <FaRegArrowAltCircleRight /></FilledButton>
                    <button className='text-gray-500 font-semibold'>Learn more</button>
                </div>
            </div>
            {/***************  HERO IMAGE ***************/}
            <Image src={'/heroImage.png'} className='ml-14' alt='pizza' width={500} height={500} />


        </section>
    )
}
