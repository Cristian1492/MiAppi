import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import UserChart from "../components/UserCharts";
import UserPieChart from '../components/UserPieChart';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white transition">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
        >
          {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
        </button>
      </div>
      <SearchBar />
      <UserList />
      <UserChart />
      <UserPieChart />
    </div>
  );
};

export default Dashboard;
