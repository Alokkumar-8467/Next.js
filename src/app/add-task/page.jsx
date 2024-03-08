import React from 'react'
import loginSvg from "../../assets/login.svg";
import Image from 'next/image';


export const metadata={
    title:"Add Task : Work Manager"
  }

const AddTask = () => {
  return (
    <div className=' grid grid-cols-12 justify-center'>
        <div className=' col-span-6 col-start-4 shadow-xl p-5'>
          <div className='my-8 flex justify-ceter'>
            <Image src={loginSvg} style={{width: "50%"}} />
          </div>
          <h1 className='text-3xl flex justify-center'>Add your task here !!</h1>

          <form action="#!">
              <div className='mt-4'>
                <label 
                  htmlFor='task_title' 
                  className='block text-sm font-medium mb-2'>Title</label>
                <input type='text' className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' id="task_title"/>
              </div>

              <div className='mt-4'>
                <label 
                  htmlFor='task_content' 
                  className='block text-sm font-medium mb-2'>
                    Content
                </label>
                <textarea 
                className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800' id="task_content"
                rows={3}/>
              </div>

              <div className='mt-4'>
                <label 
                  htmlFor='task_status' 
                  className='block text-sm font-medium mb-2'>
                    Status
                </label>
                <select id='task_status' className='w-full p-3 rounded-xl bg-gray-500 focus:ring-red-400-100 border-slate-800'>
                <option vlaue="none" selected disabled>---Select Status---</option>
                  <option vlaue="Pending">Pending</option>
                  <option vlaue="Complete">Complete</option>
                </select>
              </div>
              <div className='mt-4 flex justify-center'>
              <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
              <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3' >Clear</button>
              </div>
              
          </form>

        </div>
    </div>
  )
}

export default AddTask;