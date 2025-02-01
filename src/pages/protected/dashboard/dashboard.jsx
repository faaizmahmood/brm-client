/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './dashboard.module.scss';
import useDashboard from './useDashboard';


const Dashboard = () => {

    const {
    } = useDashboard();


    return (
        <>


            <section className={`${styles.dashboard}`}>
                <h1>Financial Summary page is here</h1>
            </section>



        </>
    );
};

export default Dashboard;
