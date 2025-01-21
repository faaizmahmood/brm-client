// AboutUs.jsx
import styles from "./aboutus.module.scss";

const AboutUs = () => {
    return (
        <div className={`${styles.aboutUsSection} mt-4`} id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2 className={styles.sectionTitle}>Why Choose Biz Resource Management</h2>
                        <p className={styles.sectionDescription}>
                            BRM is designed to help businesses, from small startups to large corporations, manage their resources effectively.
                        </p>

                        <ul className={styles.featuresList}>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Manage Human Resources
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Monitor Stock Levels
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Track Projects in Real-Time
                            </li>
                            <li>
                                <i className="fa-light fa-badge-check"></i> Improve Business Efficiency
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 text-center">
                        <img
                            src="../../../../../../public/images/about_us.png"
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
