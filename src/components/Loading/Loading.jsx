/* eslint-disable no-unused-vars */
// Loading.js
import React from 'react';
import styles from './Loading.module.scss'
import { ScaleLoader } from 'react-spinners';
// import ScaleLoader from 'react-spinners'

const Loading = () => {
    return (
        <div className={`${styles.loading}`}>
            <h4 className='mb-3'>
            CU Analysis
            </h4>
            <ScaleLoader color="#002147" />
        </div>
    );
};

export default Loading;
