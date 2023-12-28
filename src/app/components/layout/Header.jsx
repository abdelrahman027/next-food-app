import Link from 'next/link'
import React from 'react'

import NavLinks from './NavLinks'

export default function Header() {
    return (
        <header className='flex items-center justify-between '>
            <Link className='text-primary text-xl font-semibold' href="/">
                Pizza Cheeze
            </Link>
            <NavLinks />
        </header>
    )
}
