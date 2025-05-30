// src/pages/provider/ProviderDashboard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
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

import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProviderDashboard: React.FC = () => {
  // --- Mock Data ---
  const stats = [
    { name: 'Total Subscribers', value: '42', change: '+8%', trend: 'up' },
    { name: 'Monthly Revenue', value: '$3,240', change: '+12%', trend: 'up' },
    { name: 'Active Appointments', value: '76', change: '+5%', trend: 'up' },
    { name: 'Customer Growth', value: '24%', change: '-2%', trend: 'down' },
  ];

  const recentCustomers = [
    { id: 1, name: 'Emma Thompson', subscription: 'Premium', date: 'May 12, 2025', amount: '$89.00' },
    { id: 2, name: 'Michael Chen', subscription: 'Basic', date: 'May 10, 2025', amount: '$49.00' },
    { id: 3, name: 'Sophia Rodriguez', subscription: 'VIP', date: 'May 9, 2025', amount: '$149.00' },
    { id: 4, name: 'James Wilson', subscription: 'Premium', date: 'May 8, 2025', amount: '$89.00' },
  ];

  const upcomingAppointments = [
    { id: 1, customer: 'Emma Thompson', service: 'Haircut & Style', time: '10:00 AM', date: 'Today' },
    { id: 2, customer: 'Michael Chen', service: 'Beard Trim', time: '2:30 PM', date: 'Today' },
    { id: 3, customer: 'Sophia Rodriguez', service: 'Color Treatment', time: '11:00 AM', date: 'Tomorrow' },
  ];

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [2800, 3200, 3000, 3400, 3100, 3240],
        fill: true,
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        borderColor: 'rgb(124, 58, 237)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(124, 58, 237)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'white',
        titleColor: '#16122A',
        bodyColor: '#16122A',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            if (context.parsed.y !== null) {
              label += context.dataset.label === 'Monthly Revenue' ? '$' : '';
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#F3F4F6' },
        ticks: {
          callback: (value: any) =>
            revenueData.datasets[0].label === 'Monthly Revenue' ? `$${value}` : value,
        },
      },
      x: { grid: { display: false } },
    },
    interaction: { intersect: false, mode: 'index' },
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className={`mt-1 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card title="Revenue Overview">
            <div className="h-64">
              <Line data={revenueData} options={chartOptions} />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card title="Recent Customers">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.subscription}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Appointments + Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card title="Upcoming Appointments">
            <ul className="divide-y divide-gray-200">
              {upcomingAppointments.map((appt) => (
                <li key={appt.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{appt.customer}</div>
                    <span className="text-sm text-gray-500">{appt.time}</span>
                  </div>
                  <div className="text-sm text-gray-500">{appt.service}</div>
                  <div className="mt-1 text-xs text-primary-600 font-semibold">{appt.date}</div>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Card title="Quick Actions">
            <div className="grid grid-cols-1 gap-4">
              <Button variant="primary" fullWidth>Create Subscription Plan</Button>
              <Button variant="secondary" fullWidth>Manage Storefront</Button>
              <Button variant="outline" fullWidth>View Analytics</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProviderDashboard;