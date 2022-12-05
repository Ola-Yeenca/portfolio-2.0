/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1,
      }}

      transition={{
        duration: 1.5,
      }}

    className='
    flex flex-col
    relative h-screen
    text-center md:text-left
    md:flex-row max-w-7xl
    px-10 justify-evenly
    mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About</h3>

        <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}

        transition={{ duration: 1.5 }}

        whileInView={{ opacity: 1, x: 0, }}
        viewport={{ once: true }}

        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-50 object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='/Image/support.png' alt='Ola-Yinka'
        />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a little background
          </h4>

          <p className='text-base'>
          My name is <span className=''>Timothy Olaonipekun Omoniyi.</span>
          Transitioning into the tech world in 2022, I fell in love with
          Python programming language (still in progress), learning at home
          with Udemy and other online resources which then led me to Le Wagon Bootcamp.
          At Le Wagon Barcelona completed my program as a Full stack Developer. I learnt
          and worked on some cool projects there as a group/team and currently working on
          some personal projects too.
          </p>
        </div>
    </motion.div>
  )
}
