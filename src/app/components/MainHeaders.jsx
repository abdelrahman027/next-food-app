import Image from 'next/image'
import React from 'react'

const MainHeaders = ({ sub, title, lImage, rImage, parentClasses, imageClasses }) => {
    return (
        <div className={`text-center ${parentClasses}`} >
            <h3 className='uppercase text-gray-500 font-semibold leading-3'>{sub}</h3>
            <h2 className='text-primary relative font-bold text-2xl'>
                {title}
                {lImage && <div className={`absolute -top-[80px] opacity-30 right-0 ${imageClasses}`}>
                    <Image src={lImage} alt='image' width={200} height={200} />
                </div>}
                {rImage && <div className={`absolute -z-10 opacity-30 rotate-6 -top-14 left-0 ${imageClasses}`}>
                    <Image src={rImage} alt='image' width={200} height={200} />
                </div>}
            </h2>
        </div>
    )
}

export default MainHeaders