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
import '../style/Chart.css';

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
    if (!selectedCoin) {
        return null;
    }
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
            <div className='chart-header'>
                <h3>{selectedCoin.name}</h3>
                <h4>2H</h4>
            </div>
            <Line data={chartData} options={options} />
        </div>
    );
    }

export default Chart;