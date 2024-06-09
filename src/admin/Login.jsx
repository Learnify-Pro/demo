import React from 'react';
import { IoPerson, IoLockClosed } from 'react-icons/io5'; // Import user and lock icons
import Button from '../pages/reusable/Button';

const Login = () => {
  return (
    <div>
      <div className="w-screen h-screen flex items-center content-center justify-center">
        <div className="border p-8 rounded-xl w-[23em] shadow-2xl">
          <h1 className='p-4 font-bold text-2xl'>Login</h1> 
          <form action="submit">
            <div className="relative mb-2">
              <IoPerson className="absolute left-3 top-4 text-gray-400" />
              <input type="email" required placeholder='Enter Your Name' className='border p-3 pl-10 rounded-md w-full' />
            </div>
            <div className="relative mb-2">
              <IoLockClosed className="absolute left-3 top-4 text-gray-400" />
              <input type="password" required placeholder='Enter Your Password' className='border p-3 pl-10 rounded-md w-full' />
            </div>
            <Button text="Login" bgColor="green-500" textColor="black" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
