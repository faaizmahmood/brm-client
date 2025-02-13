
import Chart from 'react-apexcharts';

const ExpenseColumnChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false, // Hide toolbar icons
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true, // Show data values on the bars
    },
    // xaxis: {
    //   categories: ['Rent', 'Utilities', 'Groceries', 'Transport', 'Entertainment'],
    // },
    colors: ['#008FFB'], // Custom color for the bars
    title: {
      align: 'center',
      style: {
        fontSize: '20px',
        color: '#333',
      },
    },
  };

  const series = [
    {
      name: 'Expenses ($)',
      data: [1200, 450, 800, 300, 500],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ExpenseColumnChart;
