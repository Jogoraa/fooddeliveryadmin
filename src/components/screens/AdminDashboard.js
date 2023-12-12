import React, { useEffect, useState } from 'react';
import { fetchAnalyticsData } from '../../services/analyticsService';
import Navbar from '../Navbar';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import { Chart } from 'chart.js'; // Add this line

const AdminDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Register required scales and controller
    Chart.register(CategoryScale, LinearScale, BarController, BarElement);

    const fetchData = async () => {
      try {
        const data = await fetchAnalyticsData();
        setAnalyticsData(data);
      } catch (error) {
        setError('Error fetching analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Include an empty dependency array to ensure it runs only once

  const chartData = {
    labels: analyticsData.map(item => item.label),
    datasets: [
      {
        label: 'Analytics Data',
        data: analyticsData.map(item => item.value),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && <Bar data={chartData} />}
    </div>
  );
};

export default AdminDashboard;
