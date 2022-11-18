/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from "framer-motion";
import Link from 'next/link';



type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
    'Hello, I am Ola Yinka ',
    'Developer',
    'Designer',
    'Freelancer'
  ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <motion.div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}
      <img
      className='
      relative
      rounded-full
      h-52 w-42
      mx-auto
      object-cover'
        src='/Image/profile-picture.png' alt='Ola-Yinka'/>

        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='black'/>
      </h1>

      <div className='pt-5'>
        <Link href='#about'>
          <button className='heroButton'>About</button>
        </Link>

        <Link href='#experience'>
          <button className='heroButton'>Experience</button>
        </Link>

        <Link href='#skills'>
          <button className='heroButton'>Skills</button>
        </Link>

        <Link href='#projects'>
          <button className='heroButton'>Projects</button>
        </Link>
      </div>
    </motion.div>
  )
}
