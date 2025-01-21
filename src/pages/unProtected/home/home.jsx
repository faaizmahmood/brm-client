/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './home.module.scss'
import useHome from './useHome'
import { NavLink, useLocation } from 'react-router-dom'
import HeroSection from './Components/hero/hero'
import AboutUs from './Components/aboutus/aboutus'
import KeyFeatures from './Components/keyFeatures/keyFeatures'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import PricingTable from './Components/PricingTable/PricingTable'
import FAQs from './Components/FAQs/FAQs'

const Home = () => {

    // const { } = useHome()

    return (

        <section className={`${styles.home}`}>


            <HeroSection />
            <AboutUs />
            <KeyFeatures/>
            <HowItWorks/>
            <PricingTable/>
            <FAQs/>

        </section>

    )
}

export default Home