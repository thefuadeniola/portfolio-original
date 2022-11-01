import React from 'react'
import Nav from './Nav'
import astro from './images/bounce.png'
import { motion } from 'framer-motion'
import resume from './assets/OlaleyeFuadResume.pdf'

const line1 = 'FUADCODES'
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

const sentenceVariant = {
    initial: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}
const bounce = {
    whileHover: {
        y: -5, transition: {
            duration: 0.1
        }
    }
}

const letterVariant = {
    initial: {
        opacity: 0, y: 50
    },
    visible: {
        opacity: 1, y: 1,
        transition: {
            ease: 'easeOut',
            duration: 2,
        }
    }
}

const astroVariants = {
    initial: {
        x: -50
    },
    visible: {
        y: [20, 0],
        x: 0,
        transition: {
            x: {
                duration: 1
            },
            yoyo: Infinity,
            duration: 1,
            ease: 'easeInOut'
        }
    },
}


const Header = () => {
    return (
        <motion.div
            initial='initial' animate='visible'
            className='header'>
            <Nav />
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center p-6'>
                <div
                    className='flex flex-col justify-center space-y-6 items-center lg:w-3/4'>
                    <motion.h1
                        variants={sentenceVariant}
                        initial='initial'
                        animate='visible'
                        className='text-white tracking-wider'>{line1.split('').map((char, index) => {
                            return (
                                <motion.span key={char + '-' + index} variants={letterVariant}>
                                    {char}
                                </motion.span>
                            )
                        })}</motion.h1>
                    <div className='border-l-4 border-blue p-6 py-0 max-w-md text-sm font-thin'>
                        <h4 className='mb-4 text-blue'>Olaleye Fuad, Frontend Developer</h4>
                        <p className='text-left text-white leading-loose'>As a young developer, I have taken second nature in bringing aesthetics and functionality to reality using code.<br />
                            <a href='https://github.com/theylovefuad' className='underline'>Go to Github</a>
                        </p>
                    </div>

                </div>
                <motion.img
                    variants={astroVariants}
                    animate='visible'
                    whileHover='hover'
                    src={astro} alt=''
                />
            </div>
            <div className='flex space-around p-6 justify-center'>
                <motion.a whileHover={{ y: -5, }} variant={btn1} initial='initial' href={resume} animate='visible' className='btn1' download>Download CV</motion.a>
                <motion.a whileHover={{ y: -5 }} variant={btn2} initial='initial' animate='visible' className='btn2' href='mailto:leyefuad@gmail.com?subject=Hello Fuad'>Contact Me</motion.a>
            </div>
        </motion.div>
    )
}

export default Header
