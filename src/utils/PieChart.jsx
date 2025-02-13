
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false, // No text inside the chart
    },
    legend: {
      show: false, // No legend icons
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%', // Size of the donut hole
        },
      },
    },
    colors: ['#FDA708', '#3051FD',], // Custom border colors
  };

  const series = [25, 15]; // Data for color segments

  return (
    <div>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
