"use client"
import React, { useState } from 'react'
import InputField from '../components/InputField'
import FilledButton from '../components/FilledButton'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import Link from 'next/link';




const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [creatingUser, setCreatingUser] = useState(false);
    const [toggleShowPass, setToggleShowPass] = useState(false);
    const [errorFetching, setErrorFetching] = useState(null);
    const router = useRouter();

    const handleShowHidepass = () => {
        setToggleShowPass(!toggleShowPass)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword)
        {
            setPasswordMatch(true)
        } else
        {
            setPasswordMatch(false)
            return;
        }
        setErrorFetching(null)
        setCreatingUser(true);


        try
        {
            const response = await fetch("/api/register", {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            setCreatingUser(false)
            if (!response.ok)
            {
                if (response.statusText === "11000")
                {
                    setErrorFetching("Email already exists!")
                }
                if (response.statusText === "password at least 5 characters")
                {
                    setErrorFetching(response.statusText)
                } else
                {
                    setErrorFetching("Error! try again later!")
                }
                return;
            }
            router.push('/login')
        } catch (error)
        {
            setErrorFetching("Something went wrong!")
        }
    }

    return (
        <section className='reletive h-screen'>
            <div className='absolute -z-10 top-[20%] left-[50%] opacity-75'>
                <Image src={'/leaves.png'} width={500} height={500} alt='pepper' />
            </div>
            <h2 className='text-center mt-8 text-2xl'>Register</h2>
            <form className='flex flex-col items-center my-8 gap-4 max-w-lg mx-auto'>
                <InputField
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    disabled={creatingUser}
                />
                <InputField
                    type={toggleShowPass ? 'text' : 'password'}
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    disabled={creatingUser}
                    divClasses={"relative"}
                    Icon={toggleShowPass ? FaRegEye : FaRegEyeSlash}
                    showHide={handleShowHidepass}
                />
                <InputField
                    type='password'
                    placeholder='confirm password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    disabled={creatingUser}
                    divClasses={"relative"}
                />
                {!passwordMatch && <p>Passwords do not match</p>}
                {errorFetching && <p>{errorFetching}</p>}
                <FilledButton onClick={handleFormSubmit} disabled={creatingUser} classes={'w-full disabled:bg-gray-300 disabled:cursor-progress'} >Sign Up</FilledButton>
                <button className='border-2 border-primary w-full bg-gray-100 rounded-full flex gap-2 justify-center items-center px-8 py-2'>
                    <FcGoogle className='h-5 w-5' />
                    Google
                </button>
                <div className='text-sm'>
                    Already have an account ? <Link className='hover:underline text-primary' href={'/login'} >Sign in</Link>
                </div>
            </form>
        </section>
    )
}

export default Register