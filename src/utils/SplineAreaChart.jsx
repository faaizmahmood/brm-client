// import React from 'react';
import Chart from 'react-apexcharts';

const SplineAreaChart = () => {
    const options = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: false, // Disable icons (home, more, etc.)
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2023-01-01T00:00:00.000Z',
                '2023-01-02T00:00:00.000Z',
                '2023-01-03T00:00:00.000Z',
                '2023-01-04T00:00:00.000Z',
                '2023-01-05T00:00:00.000Z',
            ],
        },
        colors: ['#417efd', '#FF0100'], // Colors for the lines
        legend: {
            show: false, // Remove the icons/legend on top
        },
    };

    const series = [
        {
            name: 'Series A',
            data: [10, 40, 35, 50, 49],
        },
        {
            name: 'Series B',
            data: [30, 20, 55, 40, 70],
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="area" height={"350px"} />
        </div>
    );
};

export default SplineAreaChart;
