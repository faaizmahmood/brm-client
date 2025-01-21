// HeroSection.jsx
import React from "react";
import styles from "./hero.module.scss";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <section className={`${styles.hero}`}>

                <div className={`${styles.hero_section} d-flex align-items-center`}>
                    <div className="container text-center">
                        <h1 className={`${styles.hero_title}`}>
                            Empower Your Business with Resource Management
                        </h1>
                        <p className={`${styles.hero_subtitle}`}>
                            Streamline operations, manage resources effectively, and grow your business with BRM tools.
                        </p>
                        <NavLink to='/auth/signin'><button className={`${styles.btn} btn-lg mt-3`}>Get Started</button></NavLink>
                    </div>
                </div>


                <div className={`${styles.mockupImage} container`}>
                    <img src="../../../../../../public/images/mock-up-img.png" />
                </div>

            </section>
        </>


    );
};

export default HeroSection;
