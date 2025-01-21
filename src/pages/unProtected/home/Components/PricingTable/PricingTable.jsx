// PricingTable.jsx
import styles from "./PricingTable.module.scss";

const PricingTable = () => {
    const plans = [
        {
            name: "Basic",
            price: "Free",
            features: [
                "Manage up to 5 employees",
                "Track basic timesheets",
                "Limited access to HR reports",
                "1 stock management entry",
                "Basic project management tools",
            ],
        },
        {
            name: "Standard",
            price: "15",
            features: [
                "Manage up to 50 employees",
                "Advanced timesheet tracking",
                "Access to HR and stock reports",
                "Unlimited stock management entries",
                "Real-time project tracking",
                "Cashflow tracking and basic financial reports",
            ],
            popular: true,
        },
        {
            name: "Premium",
            price: "30",
            features: [
                "Unlimited employees and departments",
                "Advanced HR and payroll management",
                "NFC-enabled asset tracking",
                "Detailed financial and stock reports",
                "Comprehensive project management tools",
                "Access to premium customer support",
            ],
        },
    ];


    return (
        <div className={`${styles.pricingTable}`} id="pricing">
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.sectionTitle} text-center `}>Our Pricing</h2>

                <div className="row justify-content-center gap-4 mt-5">
                    {plans.map((plan, index) => (
                        <div className={`${styles.card} col-12 col-md-6 col-lg-4`} key={index}>
                            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                            <h3>{plan.name}</h3>
                            <h5>
                                <span>${plan.price}</span> / Mo
                            </h5>
                            {plan.features.map((feature, i) => (
                                <p key={i}>
                                    <span>{feature.split(" ")[0]}</span> {feature.substring(feature.indexOf(" ") + 1)}
                                </p>
                            ))}
                            <button type="button">Buy Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PricingTable;
