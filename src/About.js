import React from 'react'
import { motion } from 'framer-motion'
import { stack } from './Stack'

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}
const btn1 = {
    initial: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            delay: 2.5,
            type: 'string', stiffness: 300
        }
    }
}
const btn2 = {
    initial: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            delay: 2.5,
            type: 'string', stiffness: 300
        }
    }
}

const About = () => {
    return (
        <div className='md:px-20 lg:px-32 py-16 mt-7 px-6'>
            <h2 className='mb-6 text-center'>I am <span className='gradient'>skilled in...</span></h2>
            <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
                className='flex flex-wrap gap-16 text-gray-400 pt-4 justify-center'>
                {stack.map((skill) => {
                    return (
                        <div key={skill.name} className='stack flex flex-col items-center'>
                            <article>{skill.icon}</article>
                            <span className='uppercase'>{skill.name}</span>
                        </div>
                    )
                })}
            </motion.div>
            <div className='flex justify-center mt-16'>
                <motion.a whileHover={{ y: -5, }} variant={btn1} initial='initial' href='https://github.com/theylovefuad' animate='visible' className='btn1' download>Visit Github</motion.a>
                <motion.a whileHover={{ y: -5 }} variant={btn2} initial='initial' animate='visible' className='btn1' href='mailto:leyefuad@gmail.com?subject=Hello Fuad'>Contact Me</motion.a>

            </div>
        </div>
    )
}

export default About

