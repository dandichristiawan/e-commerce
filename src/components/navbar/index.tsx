import { useAuthProvider } from '@/auth';
import React from 'react';

export const Navbar = () => {
  const { currentUser } = useAuthProvider()
  return (
  <div className='flex justify-between bg-black text-white xl:p-4 p-3 xl:text-xl lg:text-lg text-md'>
    <div className='font-bold'>
      LOGO 
    </div>
    <div className='font-thin'>
      {currentUser?.firstName} {currentUser?.lastName}
    </div>
  </div>
  )
};
