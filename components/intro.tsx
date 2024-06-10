"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mt-28 mb-28 max-w-[50rem] text-center sm:mb-0 sm:mt-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src="/Potrait.jpg" alt="Potrait" width={192} height={192} quality={95} 
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-3xl'
                initial={{ opacity:0, scale: 1 }}
                animate={{ opacity:1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
                >
                    🤙
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            Hello, I'm
            <span className='font-bold'> JudgementK4zzy. </span>
            I'm a 
            <span className='font-bold'> Front-end web developer. </span>
            with 
            <span className='font-bold'> 5 years </span> 
            of experience.
            I enjoy being a 
            <span className='font-bold italic'> Babus </span> 
            and mentally ill.
        </motion.h1>

        <motion.div className='flex flex-col justify-center sm:flex-row gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
            delay: 0.1,
        }}
        >
            <Link 
            href="#contact" 
            className='group justify-center cursor-pointer bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 focus:scale-105 transition'>
            Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
            </Link>

            <a href='/CV.pdf' download className='bg-white justify-center cursor-pointer px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 focus:scale-105 transition border border-black/10'>
                Download CV <HiDownload className='opacity-70'/>
            </a>

            <a href='https://www.linkedin.com/in/bharatagangga' target='_blank' className="bg-white justify-center cursor-pointer p-4 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15] focus:scale-[1.15] transition border border-black/10">
                <BsLinkedin />
            </a>

            <a href='https://github.com/tachibanamei22' target='_blank' className="bg-white justify-center cursor-pointer p-4 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15] focus:scale-[1.15] transition border border-black/10">
                <FaGithubSquare />
            </a>

        </motion.div>
    </section>
  )
}
