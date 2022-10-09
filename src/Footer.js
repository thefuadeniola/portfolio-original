import React from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGitlab, AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'

const svgVariants = {
    initial: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}
const pathVariants = {
    initial: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
            delay: 2.5
        }
    }
}

export default function Footer() {
    return (
        <footer
            className="md:px-32 p-16 pt-6 flex flex-col space-y-12 md:space-y-0 md:flex-row mt-16 justify-around">
            <div className="">
                <div className="nav-logo flex items-center">
                    <motion.svg
                        variants={svgVariants}
                        initial='initial'
                        animate='visible'
                        className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <motion.path
                            variants={pathVariants}
                            fill="none"
                            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                        />
                        <motion.path
                            variants={pathVariants}
                            fill="none"
                            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                        />
                    </motion.svg>

                    <h2 className="gradient text-4xl mx-2 font-bold text-center">fuadCodes</h2>
                </div>
                <p className="mt-6 text-white">
                    &copy; Olaleye Fuad. 2022.
                </p>
                <div className="flex flex-row space-x-6 mt-4">
                    <a href="github.com/theylovefuad"><AiFillGithub className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href="instagram.com/theylovefuad"><AiOutlineInstagram className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href=""><AiOutlineTwitter className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href=""><AiOutlineGitlab className='text-gray-400 text-2xl hover:text-slate-800' /></a>

                </div>
            </div>
            <div className="footer__options">
                <div className="flex flex-row space-x-8">
                    <div className="flex flex-col space-y-4">
                        <a href="#home" className="text-white">Home</a>
                        <a href="#about" className="text-white">About</a>
                        <a href="#skills" className="text-white">Experience</a>
                        <a href="#portfolio" className="text-white">Portfolio</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <a href="#about" className="text-white">Contact</a>
                        <a href="#" className="text-white flex space-x-4 items-center"><BsTelephoneFill className='text-gray-400' /><span>+234
                            704 7293 841</span></a>
                        <a href="#" className="text-white flex space-x-4 items-center"><AiOutlineMail className='text-gray-400' /><span>leyefuad@gmail.com</span></a>

                    </div>

                </div>
            </div>
        </footer>

    )
}