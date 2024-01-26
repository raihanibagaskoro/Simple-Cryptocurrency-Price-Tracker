import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({data, labels, selectedCoin}) {
    const chartData = {
        labels: labels,
        datasets: [
        {
            label: selectedCoin?.name,
            data: data,
            borderColor: 'rgb(161, 63, 128)'
        }
        ],
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Crypto Chart'
            },
        },
        scales: {
            y: {
                ticks: {
                    color: "rgb(255, 255, 255)",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    color: "rgb(255, 255, 255)",
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
            },

        }
    
    
    return (
        <div className='chart'>
        <Line data={chartData} options={options} />
        </div>
    );
    }

export default Chart;