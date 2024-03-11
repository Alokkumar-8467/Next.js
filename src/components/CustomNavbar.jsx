"use client";

import UserContext from '@/context/userContext';
import Link from 'next/link';
import React, { useContext } from 'react'

const CustomNavbar = () => {

    const context = useContext(UserContext);
    console.log(context)

  return (
    <nav className="flex justify-between bg-blue-600 h-16 py-2 px-36 items-center">
        <div className='brand'>
            <h1 className='text-2xl font-semibold'>
               <a href='#!'>Work Manager</a>
            </h1>
        </div>
        <div>
            <ul className='flex space-x-4'>
               {
                context.user && (
                    <>
                        <li>
                            <Link href='/' className='hover:text-blue-300'>Home</Link>
                        </li>
                        <li>
                            <Link href='/add-task' className='hover:text-blue-300'>Add Task</Link>
                        </li>
                        <li>
                            <Link href='/show-tasks'className='hover:text-blue-300'>Show Tasks</Link>
                        </li>
                    </>
                )
               }
            </ul>
        </div>
        <div>
            <ul className='flex space-x-4'>
                { context.user && (
                    <>
                        <li>
                            <Link href='#!'>{context.user.name}</Link>
                        </li>
                        <li>
                            <Link href='#!'>Logout</Link>
                        </li>
                    </>
                    )
                }
                { !context.user && (
                    <>
                        <li>
                            <Link href='/login'>Login</Link>
                        </li>
                        <li>
                            <Link href='/signup'>SignUp</Link>
                        </li>
                        </>
                    )
                }
            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar;