import UserContext from '@/context/userContext';
import React, { useContext } from 'react'

const Task = ({ task }) => {
    const {user} = useContext(UserContext);
  return (
    <div className={`bg-slate-500 shadow-lg mt-2 rounded-md `}>
        <div className='p-5'>
            <h1 className='text-2xl font-semibold text-white'>{task.title}</h1>
            <p className=' font-normal text-white'>{task.content}</p>
            <div className='flex justify-between mt-3'>
            <p className='text-right text-white'>Status: <span className='font-bold'>{task.status}</span></p>
            <p className='text-right text-white'>Author: <span className='font-bold'>{user?.name}</span></p>
            </div>
        </div>
    </div>
  );
};

export default Task