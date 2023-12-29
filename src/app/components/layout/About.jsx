import React from 'react'
import MainHeaders from '../MainHeaders'

export default function About() {
    return (
        <section>
            <MainHeaders
                sub={'Our Story'}
                title={'About us'}
                parentClasses={'py-16'}
                rImage={'/bakePizza.png'}
                imageClasses={'opacity-100'}
            />
            <div className='text-gray-500 flex flex-col max-w-lg mx-auto gap-6 text-center'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic molestiae omnis tempore tempora minus commodi maiores! Necessitatibus, esse ipsam cupiditate, voluptatum totam debitis enim fugit numquam autem magnam officia!

                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto nihil doloremque, officia odit nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed, cumque ut tempore, earum totam quia quisquam illo eius dolorum optio veniam itaque harum ratione consectetur corporis ipsum vitae ab.
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora dolore nobis, quam harum sed ullam fugiat nihil labore sapiente?</p>
            </div>
        </section>
    )
}
