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
            Biz Resource Management - BRM
            </h4>
            <ScaleLoader color="#0000ff" />
        </div>
    );
};

export default Loading;
