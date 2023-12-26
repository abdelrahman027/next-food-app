import Link from 'next/link'
import React from 'react'
import FilledButton from '../FilledButton'

export default function Header() {
    return (
        <header className='flex items-center justify-between '>
            <Link className='text-primary text-xl font-semibold' href="/">
                Pizza Cheeze
            </Link>
            <nav className='flex gap-8 text-gray-500 items-center'>
                <Link href='/'>Home</Link>
                <Link href='/'>Menu</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <FilledButton>
                    <Link href='/'>Login</Link>
                </FilledButton>
            </nav>
        </header>
    )
}
