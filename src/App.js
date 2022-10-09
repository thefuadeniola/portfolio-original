import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { data } from './dry'

export default function App() {

    const [showDetails, setShowDetails] = useState(null)
    const seeDetails = (id) => {
        if (showDetails === null) {
            setShowDetails(id)
        } else setShowDetails(null)
    }

    return (
        <body>
            <Header />
            <About />
            <Portfolio />
            <Footer />
        </body>

    )
}