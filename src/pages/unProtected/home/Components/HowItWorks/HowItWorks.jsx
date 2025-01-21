/* eslint-disable no-unused-vars */
// HowItWorks.jsx
import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorks = () => {
    const steps = [
        {
          stepNumber: "1",
          title: "Sign Up",
          description:
            "Create an account to access the powerful tools of BRM. During the signup process, you will provide essential information about your business, such as its name, size, and primary focus. This step ensures your business profile is tailored to your specific needs, enabling a personalized experience from the start.",
        },
        {
          stepNumber: "2",
          title: "Add Details",
          description:
            "Once your account is set up, populate the system with critical data. Add employees, define their roles, and assign responsibilities. Include assets such as equipment, vehicles, and stock inventory. This data helps you centralize your operations and provides a strong foundation for efficient management.",
        },
        {
          stepNumber: "3",
          title: "Manage Resources",
          description:
            "With all the details in place, use BRM to monitor and manage your resources effortlessly. Track employee performance, monitor stock levels to avoid shortages, and oversee asset utilization. Gain valuable insights through reports and analytics, allowing you to make informed decisions that drive your business forward.",
        },
      ];
      
    return (
        <div className={styles.howItWorksSection} id="works">
            <div className="container">
                <h2 className={`${styles.sectionTitle} text-center mb-5`}>How It Works</h2>
                {steps.map((step, index) => (
                    <div className={`${styles.stepRow} row mb-md-5 mb-3`} key={index}>
                        <div className="col-md-1">
                            <div className={styles.stepNumber}>
                                <h3 >{step.stepNumber}</h3>
                            </div>
                        </div>
                        <div className="col-md-11">
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
