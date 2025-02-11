// HeroSection.jsx
import styles from "./hero.module.scss";
import { NavLink } from "react-router-dom";
import mockUp from '../../../../../../public/images/mock-up-img.png'

const HeroSection = () => {
    return (
        <>
            <section className={`${styles.hero}`}>

                <div className={`${styles.hero_section} d-flex align-items-center`}>
                    <div className="container text-center">
                        <h1 className={`${styles.hero_title}`}>
                        Powerful Financial Insights at Your Fingertips
                        </h1>
                        <p className={`${styles.hero_subtitle}`}>
                        Analyze financial data, compare industry peers, and forecast with precision—all in one powerful, intuitive platform
                        </p>
                        <NavLink to='/auth/signin'><button className={`${styles.btn} btn-lg mt-3`}>Get Started</button></NavLink>
                    </div>
                </div>


                <div className={`${styles.mockupImage} container`}>
                    <img src={mockUp} />
                </div>

            </section>
        </>


    );
};

export default HeroSection;
