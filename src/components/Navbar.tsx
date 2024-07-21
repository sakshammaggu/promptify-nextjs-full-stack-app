'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { AlignJustify, User } from 'lucide-react'
import { signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const isUserLoggedIn = true; 
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [providers, setProviders] = useState<any>(null);
    useEffect(()=>{
        const setProvider=async ()=>{
            const response=await getProviders();
            setProviders(response);
        }
        setProvider();
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='flex w-full pt-3'>
            <div>
                <Link href="/" className='flex gap-2 flex-center ml-8'>
                    <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-4xl">
                        Promptify
                    </span>
                </Link>
            </div>
            
            <div className='flex flex-1 items-end justify-end'>
                <div className='hidden md:flex items-center gap-2'>
                    {isUserLoggedIn && (
                        <>
                            <Link href="/create-post">
                                <Button className='rounded-md'>Create Post</Button>
                            </Link>
                            <Button className='rounded-md' onClick={() => signOut()}>Sign Out</Button>
                            <User size={32} /> {/* User icon */}
                        </>
                    )}
                    {!isUserLoggedIn && (
                        <>
                            <Link href="/auth/sign-in">
                                <Button className='rounded-md'>Sign In</Button>
                            </Link>
                            <Link href="/auth/sign-up">
                                <Button className='rounded-md'>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>

                <div className='md:hidden flex items-center gap-2'>
                    {isUserLoggedIn ? (
                        <div className='flex flex-1 gap-4'>
                            <Link href="/create-post">
                                <Button className='rounded-md'>Create Post</Button>
                            </Link>
                            <User onClick={toggleMenu} size={32} />
                        </div>
                        
                    ) : (
                        <AlignJustify onClick={toggleMenu} size={32} />
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className='absolute top-0 right-0 mt-12 mr-8 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 md:hidden'>
                    {isUserLoggedIn ? (
                        <Button className='rounded-md' onClick={() => signOut()}>Sign Out</Button>
                    ) : (
                        <>
                            <Link href="/auth/sign-in">
                                <Button className='rounded-md'>Sign In</Button>
                            </Link>
                            <Link href="/auth/sign-up">
                                <Button className='rounded-md'>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
