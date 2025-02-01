/* eslint-disable no-unused-vars */
// HowItWorks.jsx
import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorks = () => {
    const steps = [
        {
          stepNumber: "1",
          title: "Sign Up & Connect",
          description:
            "Create an account and link your institution to access financial data.",
        },
        {
          stepNumber: "2",
          title: "Analyze & Compare",
          description:
            "View reports, compare with peers, and explore key financial insights.",
        },
        {
          stepNumber: "3",
          title: "Forecast & Plan",
          description:
            "Generate future projections and run liquidity stress tests with ease.",
        },
      ];
      
    return (
        <div className={styles.howItWorksSection} id="works">
            <div className="container mt-5">
                <h2 className={`${styles.sectionTitle} text-center mb-5`}>How It Works</h2>
                {steps.map((step, index) => (
                    <div className={`${styles.stepRow} row mb-md-5 mb-3`} key={index}>
                        <div className="col-md-1">
                            <div className={styles.stepNumber}>
                                <h3 className="text-white">{step.stepNumber}</h3>
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