import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

export default function Contact({}: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className='
    h-screen flex relative flex-col
    text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto
    items-center'>
      <h3 className='
      absolute top-24 uppercase
      tracking-[20px] text-gray-500
      text-2xl'>
      Contact yinka
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Let me work with your team... Hire Me
        </h4>
      </div>

      <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#53B3CB] animate-pulse">
            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
          </svg>

          <p>
            +34 631 789 277
          </p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#53B3CB] animate-pulse">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>


          <p>
            Olayinkatimothy102@gmail.com
          </p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#53B3CB] animate-pulse">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>


          <p>
            Valencia, Spain
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
          <input {...register('name')} placeholder='Name or Company' className='contactInput' type="text" />
          <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
        </div>

        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

        <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>

        <button type='submit' className='bg-[#53B3CB] py-5 px-10 rounded-md text-black uppercase font-bold text-lg'>Submit</button>

      </form>
    </div>
  )
}
