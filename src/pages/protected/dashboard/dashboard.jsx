/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';
import useDashboard from './useDashboard';
import SplineAreaChart from '../../../utils/SplineAreaChart';
import DonutChart from '../../../utils/PieChart';
import ExpenseColumnChart from '../../../utils/ExpenseColumnChart';
import Calendar from "react-calendar"


const Dashboard = () => {


    const [date, setDate] = useState(new Date());

    const {
    } = useDashboard();


    return (
        <>


            <section className={`${styles.dashboard} mt-3`}>
                <h1>Dashboard</h1>

                <h6 className='mt-3'>Home <i className="fa-solid fa-angle-right"></i> Dashboard</h6>

                <div className={`row mt-4 ${styles.cards}`}>

                    <div className='col-6'>
                        <div className='row'>

                            <div className='col-6'>
                                <div className={`${styles.dashboard_card} d-flex align-items-center justify-content-between`}>
                                    <i className="fa-regular fa-people" style={{ background: '#cdf5e0', color: '#50B487' }} ></i>
                                    <div className='text-end'>
                                        <h6>Students</h6>
                                        <h4 className='mt-2 fw-bold'>150000</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6'>
                                <div className={`${styles.dashboard_card} d-flex align-items-center justify-content-between`}>
                                    <i className="fa-regular fa-users" style={{ background: '#e1f6f8', color: '#4478f2' }}></i>
                                    <div className='text-end'>
                                        <h6>Teachers</h6>
                                        <h4 className='mt-2 fw-bold'>2250</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row p-3'>

                            <div className={`${styles.left_bottom_card}`}>
                                <h3>Earnings</h3>
                                <SplineAreaChart />
                            </div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>

                            <div className='col-6'>
                                <div className={`${styles.dashboard_card} d-flex align-items-center justify-content-between`}>
                                    <i className="fa-regular fa-users" style={{ background: '#FBF7D6', color: '#E6C777' }}></i>
                                    <div className='text-end'>
                                        <h6>Parents</h6>
                                        <h4 className='mt-2 fw-bold'>5690</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6'>
                                <div className={`${styles.dashboard_card} d-flex align-items-center justify-content-between`}>
                                    <i className="fa-regular fa-users" style={{ background: '#FFEAE6', color: '#AB3241' }}></i>
                                    <div className='text-end'>
                                        <h6>Earnings</h6>
                                        <h4 className='mt-2 fw-bold'>$193000</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row mt-3'>

                            <div className='col-6'>
                                <div className={`${styles.left_bottom_card}`}>
                                    <h3>Expenses</h3>
                                    <ExpenseColumnChart />
                                </div>
                            </div>

                            <div className='col-6'>
                                <div className={`${styles.left_bottom_card}`}>
                                    <h3>Students</h3>
                                    <DonutChart />

                                    <div className={`${styles.studentRatio} mt-3`}>

                                        <div>
                                            <div className={`${styles.ratioBar}`} style={{ backgroundColor: '#4571FF' }}></div>
                                            <p className='mt-2'>Female Students</p>
                                            <h6>45000</h6>
                                        </div>
                                        <div>
                                            <div className={`${styles.ratioBar}`} style={{ backgroundColor: '#FFE40F' }}></div>
                                            <p className='mt-2'>Male Students</p>
                                            <h6>45000</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={`row mt-5 ${styles.bottom_row}`}>

                    <div className='col-4'>
                        <div className={`${styles.bottom_col} ${styles.event_calender}`}>
                            <h3>Event Calender</h3>

                            <h4>{new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }).replace(',', '')}</h4>

                            <Calendar
                                onChange={setDate}
                                value={date}
                                className={`${styles.custom_calendar}`}
                            />

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className={`${styles.bottom_col} ${styles.unique_visitor}`}>
                            <h3>Website Trafic</h3>

                            <p><span>Unique Visitor</span></p>
                            <div style={{ width: '100%', height: '10px', display: 'flex', marginTop: '10px' }}>
                                <div style={{ flex: 1, backgroundColor: 'red' }}></div>
                                <div style={{ flex: 2, backgroundColor: 'blue' }}></div>
                                <div style={{ flex: 3, backgroundColor: 'green' }}></div>
                                <div style={{ flex: 4, backgroundColor: 'yellow' }}></div>
                            </div>

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className={`${styles.bottom_col} ${styles.notice_board}`}>
                            <h3>Notice Board</h3>
                            <div className={styles.date}>
                                {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(',', '')}
                            </div>

                            <h5>Greate School manag mene esom text of the printing</h5>

                            <p>John Doe <span>/ 5 minutes ago</span></p>
                        </div>
                    </div>

                </div>

            </section>



        </>
    );
};

export default Dashboard;
