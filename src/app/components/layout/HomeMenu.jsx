import Image from 'next/image'
import React from 'react'
import MenuItem from '../MenuItem'
import MainHeaders from '../MainHeaders'

export default function HomeMenu() {
    return (
        <section>
            <MainHeaders
                sub={'Check Out'}
                title={'Menu'}
                lImage={'/tomato.png'}
                rImage={'/lattice.png'}
            />
            <div className='grid grid-cols-3 gap-4 mt-8'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}
