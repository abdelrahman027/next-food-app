"use client"
import React, { useState } from 'react';
import FilledButton from '../FilledButton';
import Link from 'next/link';
import { IoMdPizza } from "react-icons/io";
import { TbPizzaOff } from "react-icons/tb";



export default function () {
    const [isMobile, setIsMobile] = useState(false);
    function handleShowNav() {
        setIsMobile((prevState) => !prevState)
    }
    return (
        <>
            {/**************  MOBILE NAVBAR *************/}
            <div>
                {/* Show button */}
                <button onClick={handleShowNav} className='block md:hidden z-50'>
                    <IoMdPizza className='text-primary h-8 w-8' />

                </button>
                {/* NAV */}
                <nav className={`gap-8 ${isMobile ? 'fixed top-0   right-0' : 'fixed -right-[300px] top-0'} text-white  transition-all duration-300 bg-gray-600/80 bg-blend-saturation  p-12 items-center h-screen flex flex-col`}>
                    <button onClick={handleShowNav}>
                        <TbPizzaOff className='text-primary h-8 w-8' />
                    </button>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Menu</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <FilledButton>
                        <Link href='/'>Login</Link>
                    </FilledButton>
                </nav>
            </div>
            {/**************  NORMAL NAVBAR *************/}
            <nav className='md:flex gap-8 hidden text-gray-500 items-center self-end '>
                <Link href='/'>Home</Link>
                <Link href='/'>Menu</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <FilledButton>
                    <Link href='/'>Login</Link>
                </FilledButton>
            </nav>

        </>

    )
}
