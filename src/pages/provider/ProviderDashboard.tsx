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
import { PlusCircle, Store, BarChart } from 'lucide-react';

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
    <div className="space-y-10 max-w-screen-xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Jamie 👋</h1>
        <p className="text-gray-500 mt-1">Here’s what’s happening in your salon this week.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition rounded-2xl p-6">
              <h3 className="text-sm text-gray-500 font-medium">{stat.name}</h3>
              <p className="text-3xl font-semibold text-gray-900 mt-2">{stat.value}</p>
              <p className={`mt-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl p-6 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
          <div className="h-64">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </Card>

        <Card title="Recent Customers">
          <div className="grid sm:grid-cols-2 gap-4">
            {recentCustomers.map(customer => (
              <div key={customer.id} className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-md transition">
                <div className="text-lg font-semibold text-gray-800">{customer.name}</div>
                <p className="text-sm text-gray-500">{customer.subscription} plan</p>
                <p className="text-sm text-gray-400">{customer.date}</p>
                <p className="text-sm font-bold text-primary-600 mt-1">{customer.amount}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Upcoming Appointments">
          <ul className="relative border-l border-gray-200 pl-4">
            {upcomingAppointments.map(appt => (
              <li key={appt.id} className="mb-6 ml-4">
                <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-1.5 top-1.5"></div>
                <h4 className="text-md font-semibold">{appt.customer}</h4>
                <p className="text-sm text-gray-500">{appt.service}</p>
                <p className="text-xs text-primary-500 font-medium mt-1">{appt.date} – {appt.time}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Quick Actions">
          <div className="grid grid-cols-1 gap-4">
            <Button variant="primary" fullWidth icon={<PlusCircle className="mr-2" />}>Create Subscription Plan</Button>
            <Button variant="secondary" fullWidth icon={<Store className="mr-2" />}>Manage Storefront</Button>
            <Button variant="outline" fullWidth icon={<BarChart className="mr-2" />}>View Analytics</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProviderDashboard;
