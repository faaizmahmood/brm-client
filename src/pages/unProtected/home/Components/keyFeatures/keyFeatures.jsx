// KeyFeatures.jsx
import styles from "./keyFeatures.module.scss";

const KeyFeatures = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "HR Management",
      description: "Manage employees, track timesheets, and generate reports.",
      link: "/hrm",
    },
    {
      icon: "fas fa-boxes",
      title: "Stock Management",
      description: "Monitor inventory and prevent shortages.",
      link: "/stock",
    },
    {
      icon: "fas fa-tasks",
      title: "Project Management",
      description: "Assign tasks and track progress in real time.",
      link: "/projects",
    },
    {
      icon: "fas fa-chart-line",
      title: "Finance Management",
      description: "Track cash flow, generate payslips, and manage debtors.",
      link: "/finance",
    },
  ];

  return (
    <div className={styles.keyFeaturesSection} id="features">
      <div className="container">
        <h2 className={styles.sectionTitle}>Key Features of CU Analysis</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className={styles.featureCard}>
                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
                <a href={feature.link} className={`${styles.btn} btn-sm`}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
