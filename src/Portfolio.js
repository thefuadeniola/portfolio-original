import React from 'react'
import { data } from './dry'

const Portfolio = () => {
    return (
        <div className='portfolio '>
            <section id="portfolio" className="md:p-16 mt-8 p-6">
                <h2 className="text-center text-3xl font-semibold p-6 tracking-wider">RECENT <span className='gradient'>WORK</span></h2>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {
                        data.map((project) => {
                            return (
                                <div key={project.name} className='md:flex'>
                                    <a href={project.link}>
                                        <article className={`portfolio__item text-white`}>
                                            <div className="portfolio__item-image">
                                                <img src={project.picture} alt={project.name} />
                                            </div>
                                            <h3>{project.name}</h3>
                                        </article>
                                    </a>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Portfolio