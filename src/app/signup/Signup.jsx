import React from 'react'
import signupSvg from "../../assets/signup.svg";
import Image from 'next/image';

const Signup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 shadow-xl h-full w-full">
      <div >
        <div className="grid grid-cols-12 justify-center">
            <div className='col-span-10 col-start-6 py-5'>
                <div className='py-5 '>

                    <h1 className='text-3xl text-center'>Signup Here</h1>
                    <form action='#!' className='mt-5'>

                        {/* For name */}
                        <div className="mt-3">
                            <label htmlFor="user_name" 
                            className='block text-sm font-medium mb-2 ps-3'>Username</label>
                            <input type='text' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_name'
                            placeholder='Enter your name here'/>
                        </div>

                          {/* For email */}
                          <div className="mt-3">
                            <label htmlFor="user_email" 
                            className='block text-sm font-medium mb-2 ps-3'>Email</label>
                            <input type='email' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_email'
                            placeholder='Enter your email here'/>
                        </div>

                          {/* For password */}
                          <div className="mt-3">
                            <label htmlFor="user_password" 
                            className='block text-sm font-medium mb-2 ps-3'>Password</label>
                            <input type='password' 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            id='user_password'
                            placeholder='Enter your password here'/>
                        </div>

                          {/* For about */}
                          <div className="mt-3">
                            <label htmlFor="user_about" 
                            className='block text-sm font-medium mb-2 ps-3'>About</label>
                            <textarea 
                            className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' 
                            placeholder='Enter about your self' 
                            id='user_about'
                            rows={2} ></textarea>
                        </div>

                        <div className='mt-4 flex justify-center'>
                            <button className='bg-yellow-400 py-2 px-3 rounded-lg hover:bg-yellow-500'>SignUp</button>
                            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-500 ms-3' >Reset</button>
                  </div>

                    </form>
                </div>
            </div>
        </div>
      </div>

      <div className=' justify-center col-span-4 col-start-2 py-20'>
      <Image src={signupSvg} style={{width: "60%", alt:'Alok'}}
            alt='Alok' />
      </div>

    </div>
  )
}

export default Signup
// grid grid-cols-12 justify-center