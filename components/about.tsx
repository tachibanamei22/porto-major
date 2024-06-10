"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.175
    }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum rem architecto atque reprehenderit, molestiae labore doloribus excepturi minus quod! Harum expedita aliquid animi omnis, maxime ad facilis molestiae eum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi architecto veritatis exercitationem minima neque mollitia, illum maiores libero quaerat iure unde. Voluptatum ut esse corrupti a porro quae qui.
        </p>
    </motion.section>
  )
}
