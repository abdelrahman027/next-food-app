import React from 'react'
import MainHeaders from '../MainHeaders'

const ContactUs = () => {
    return (
        <section>
            <MainHeaders
                sub={"Do not Hesitate"}
                title={"Contact Us"}
                parentClasses={'pt-16 pb-8'}
                lImage={'/bwPizza.png'}
                imageClasses={'opacity-100'}
            />
            <p className='text-2xl text-gray-500 underline md:text-4xl text-center'>
                +012 345 687 78
            </p>

        </section>
    )
}

export default ContactUs