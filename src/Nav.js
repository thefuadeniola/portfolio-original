import React, { useState } from 'react'
import { motion } from 'framer-motion'

const navVariants = {
    initial: {
        opacity: 0, y: -50
    },
    visible: {
        opacity: 1, y: 0,
        transition: {
            type: 'spring', stiffness: 300, delay: 2
        }
    }
}
const logo = {
    visible: {
        z: 50
    }
}
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


const Nav = () => {

    const [isMenu, setIsMenu] = useState(false)
    const handleClick = () => {
        setIsMenu(oldMenu => !oldMenu)
    }

    return (
        <motion.div
            variants={navVariants}
            initial='initial'
            animate='visible'
        >
            <nav className={`flex justify-between px-8 p-6 shadow-sm`} id="nav2">
                <div className="flex items-center space-x-2">
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
                </div>
                <button id="menu-btn" onClick={handleClick} className={`block hamburger focus:outline-none`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </nav>
            <div className="md:hidden">
                <div id="menu"
                    className={`absolute flex flex-col items-center self-end py-8 mt-20 space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md ${!isMenu && 'hidden'}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Experience</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Nav