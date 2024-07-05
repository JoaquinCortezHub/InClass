'use client';
import React from 'react'

const UserItem = () => {
    return (
        <div className='flex items-center justify-between gap-2 border-t-2 border-neutral-200   py-2'>
            <div className=' ml-4 avatar rounded-full min-h-8 min-w-8 flex items-center justify-center bg-orange-500 font-semibold text-white'>
                <p>TC</p>
            </div>
            <div className='grow'>
                <p className='text-[16px] font-bold'>Teacher</p>
                <p className='text-[12px] font-neutral-400'>teacheraccount@gmail.com</p>
            </div>
        </div>
    )
};

export default UserItem;