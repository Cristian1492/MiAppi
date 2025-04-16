import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../contexts/GlobalContext';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserChart = () => {
  const { users } = useContext(GlobalContext);

  const data = {
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: 'Usuarios por ciudad',
        data: users.map((user) => user.address.length), // Ejemplo simple con longitud de dirección
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Grafico de personas</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserChart;
