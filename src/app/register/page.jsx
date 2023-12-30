import React from 'react'
import InputField from '../components/InputField'
import FilledButton from '../components/FilledButton'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    return (
        <section className='reletive'>
            <div className='absolute -z-10 top-[20%] left-[50%] opacity-75'>
                <Image src={'/leaves.png'} width={500} height={500} alt='pepper' />
            </div>
            <h2 className='text-center mt-8 text-2xl'>Register</h2>
            <div className='flex flex-col items-center my-8 gap-4 max-w-lg mx-auto'>
                <InputField
                    type='email'
                    placeholder='email'
                />
                <InputField
                    type='password'
                    placeholder='password'
                />
                <InputField
                    type='password'
                    placeholder='confirm password'
                />
                <FilledButton classes={'w-full'} >Sign Up</FilledButton>
                <button className='border-2 border-primary w-full bg-gray-100 rounded-full flex gap-2 justify-center items-center px-8 py-2'>
                    <FcGoogle className='h-5 w-5' />
                    Google
                </button>
            </div>
        </section>
    )
}

export default Register