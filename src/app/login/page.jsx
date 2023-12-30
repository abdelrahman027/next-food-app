import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import InputField from '../components/InputField';
import FilledButton from '../components/FilledButton';


const Login = () => {
    return (
        <section className='reletive'>
            <div className='absolute -z-10 top-0 left-[50%] opacity-75'>
                <Image src={'/pepper.png'} width={500} height={500} alt='pizza' />
            </div>
            <h2 className='text-center mt-8 text-2xl'>Log in</h2>
            <div className='flex flex-col items-center my-8 gap-4 max-w-lg mx-auto'>
                <InputField
                    type='email'
                    placeholder='email'
                />
                <InputField
                    type='password'
                    placeholder='password'
                />
                <FilledButton classes={'w-full'} >Sign In</FilledButton>
                <button className='border-2 border-primary w-full bg-gray-100 rounded-full flex gap-2 justify-center items-center px-8 py-2'>
                    <FcGoogle className='h-5 w-5' />
                    Google
                </button>
            </div>
        </section>
    )
}

export default Login