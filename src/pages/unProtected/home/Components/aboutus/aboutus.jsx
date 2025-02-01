// AboutUs.jsx
import styles from "./aboutus.module.scss";
import aboutImg from '../../../../../../public/images/about_us.png'

const AboutUs = () => {
    return (
        <div className={`${styles.aboutUsSection} mt-4`} id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                        <p className={styles.sectionDescription}>
                        Empower your financial decisions with accurate insights and advanced analytics.
                        </p>

                        <ul className={styles.featuresList}>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Get detailed financial summaries and peer comparisons.
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Plan ahead with precise, data-driven projections.
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Intuitive design for seamless navigation and insights.
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Built for accuracy, security, and performance.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 text-center">
                        <img
                            src={aboutImg}
                            alt="About Us"
                            className={styles.aboutUsImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
