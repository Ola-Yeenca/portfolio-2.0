import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 1.5,
          type: 'spring',
        }}

      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
        url="https://twitter.com/Ola_Yeenca"
        fgColor='grey'
        bgColor='transparent'
        />
        <SocialIcon
        url="https://twitter.com/Ola_Yeenca"
        fgColor='grey'
        bgColor='transparent'
        />
        <SocialIcon
        url="https://twitter.com/Ola_Yeenca"
        fgColor='grey'
        bgColor='transparent'
        />
        <SocialIcon
        url="https://twitter.com/Ola_Yeenca"
        fgColor='grey'
        bgColor='transparent'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1.5,
            type: 'spring',
          }}

        className='flex flex-row items-center text-grey-300 cursor-pointer'>
          <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
          />
          <p className='
          uppercase
          hidden
          md:inline-flex
          text-sm
          text-grey-200'>
            Get In Touch
          </p>
        </motion.div>
      </Link>

    </header>
  );
}
