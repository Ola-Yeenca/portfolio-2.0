import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='
    flex flex-col rounded-lg
    items-center space-y-7
    flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929]
    p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity
    duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}

        transition={{ duration: 1.5 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

      className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="Image/amazon.png" alt="Amazon" />

      <div className='px-o md:px-10'>
        <h4 className='text-4xl font-light'>DSP for Amazon</h4>
        <p className='font-bold mt-1 text-2xl'>Amazon DSP Valencia, Spain</p>
        <div className='flex space-x-2 my-2'>


          <img className='h-10 w-10 rounded-full'
          src="Image/html.png" alt="HTML" />

          <img className='h-10 w-10 rounded-full'
          src="Image/css3.png" alt="CSS" />

          <img className='h-10 w-10 rounded-full'
          src="Image/javascript-logo.png" alt="JAVASCRIPT" />

          <img className='h-10 w-10 rounded-full'
          src="Image/github.png" alt="GITHUB" />

          <img className='h-10 w-10 rounded-full'
          src="Image/tailwind.png" alt="GITHUB" />

        </div>
          <p className='uppercase py-5 text-gray-300'>
            2022 - Present
          </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}
