import React from 'react'
import Landing from '../../components/Landing/Landing'
import Card from '../../components/Card/Card'
import './home.css'
import { introsData } from '../../mock/data'
import Questions from '../../components/Questions/Questions'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div className="fluid home">
            <Landing />
            <Card cardContent={introsData[0]} />
            <Card cardContent={introsData[1]} right />
            <Card cardContent={introsData[2]} />
            <Questions />
            <Footer />

        </div>
    )
}

export default Home
