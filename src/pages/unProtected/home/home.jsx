/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './home.module.scss'
import useHome from './useHome'
import { NavLink, useLocation } from 'react-router-dom'

const Home = () => {

    const { } = useHome()

    return (

        <section className={`${styles.home}`}>


            HOME.....

        </section>

    )
}

export default Home