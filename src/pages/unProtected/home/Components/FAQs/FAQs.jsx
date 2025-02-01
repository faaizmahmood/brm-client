/* eslint-disable no-unused-vars */
// FAQs.jsx
import { Accordion } from "react-bootstrap";
import styles from "./FAQs.module.scss";

const FAQs = () => {
    return (
        <div className={styles.faqsSection}>
            <div className="container">
                <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                <Accordion flush>
                    <Accordion.Item eventKey="0" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-question-circle me-2"></i>
                            Who can use this platform?
                        </Accordion.Header>
                        <Accordion.Body>
                            Our platform is designed for financial professionals, analysts, and institutions looking to gain deeper insights into financial data.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-chart-line me-2"></i>
                            How does peer analysis work?
                        </Accordion.Header>
                        <Accordion.Body>
                            The app compares your institution’s financial performance against industry peers using real-time data from our database.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-calculator me-2"></i>
                            Can I customize my financial forecasts?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes! You can input custom variables like loan growth rates to generate tailored financial projections.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-lock me-2"></i>
                            Is my financial data secure?
                        </Accordion.Header>
                        <Accordion.Body>
                            Absolutely! We use advanced security measures to ensure your data remains safe and confidential.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-user-friends me-2"></i>
                            Do I need technical knowledge to use this platform?
                        </Accordion.Header>
                        <Accordion.Body>
                            No, the platform is designed to be user-friendly, with an intuitive interface and automated insights.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQs;