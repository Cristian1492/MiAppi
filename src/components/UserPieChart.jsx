import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { GlobalContext } from '../contexts/GlobalContext';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserPieChart = () => {
  const { users } = useContext(GlobalContext);

  const getCityFromAddress = (address) => {
    const parts = address.split(',');
    return parts[parts.length - 1].trim().toLowerCase();
  };

  const cityCounts = users.reduce((acc, user) => {
    const city = getCityFromAddress(user.address);
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const COLORS = [
    '#60A5FA', '#34D399', '#FBBF24', '#F87171',
    '#A78BFA', '#F472B6', '#818CF8', '#2DD4BF', '#FF9F40'
  ];

  const labels = Object.keys(cityCounts);
  const dataValues = Object.values(cityCounts);
  const backgroundColors = labels.map((_, index) => COLORS[index % COLORS.length]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Usuarios por ciudad',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Organizado por ciudad</h2>
      <Pie data={data} />
    </div>
  );
};

export default UserPieChart;
