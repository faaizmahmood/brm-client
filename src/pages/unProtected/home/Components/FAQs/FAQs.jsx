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
                            What types of businesses can use BRM?
                        </Accordion.Header>
                        <Accordion.Body>
                            BRM is designed for businesses of all sizes, from small startups to large corporations.
                            It is highly versatile and can cater to various industries, including retail, manufacturing,
                            technology, and more.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-lock me-2"></i>
                            Is it secure?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, BRM employs robust security measures, including data encryption and secure authentication
                            protocols, to ensure your business information remains safe and confidential.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-play-circle me-2"></i>
                            How do I get started?
                        </Accordion.Header>
                        <Accordion.Body>
                            Getting started is simple! Sign up for an account, set up your business profile, and start
                            adding employees, assets, and other details to begin managing your resources efficiently.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-users me-2"></i>
                            Can I manage multiple departments?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, BRM allows you to manage multiple departments within your organization. You can assign
                            roles, track performance, and streamline operations across all departments.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mt-3">
                        <Accordion.Header>
                            <i className="fas fa-boxes me-2"></i>
                            Does BRM support inventory tracking?
                        </Accordion.Header>
                        <Accordion.Body>
                            Absolutely! BRM includes stock and inventory management features that allow you to monitor
                            stock levels, track movements, and receive alerts when items are running low.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </div>
    );
};

export default FAQs;
