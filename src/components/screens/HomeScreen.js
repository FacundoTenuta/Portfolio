import React from 'react'
import { AboutMe } from '../portfolio/AboutMe'
import { Footer } from '../portfolio/Footer'
import { Showcase } from '../portfolio/Showcase'
import { Tecnologies } from '../portfolio/Tecnologies'

export const HomeScreen = () => {
    return (
        <div>
            <Showcase />
            <AboutMe />
            <Tecnologies />
            <Footer />
        </div>
    )
}
