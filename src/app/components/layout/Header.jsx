import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4'>
            <Link className='text-orange-600 font-semibold text-lg' href={'/'}>PIZZA CHEEZE</Link>
            <nav className='flex gap-4 text-slate-600 items-center'>
                <Link className='hover:bg-slate-200 px-4 py-2 rounded-full text-orange-600' href={""}>Home</Link>
                <Link className='hover:bg-slate-200 px-4 py-2 rounded-full' href={""}>Menu</Link>
                <Link className='hover:bg-slate-200 px-4 py-2 rounded-full' href={""}>About</Link>
                <Link className='hover:bg-slate-200 px-4 py-2 rounded-full' href={""}>Contacts</Link>
                <Link className='bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all duration-200' href={""}>Login</Link>
            </nav>
        </header>
    )
}

export default Header