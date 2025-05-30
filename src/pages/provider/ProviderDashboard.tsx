import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, CreditCard, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

// Register ChartJS components
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
  // Mock data for the dashboard
  const stats = [
    { 
      name: 'Total Subscribers', 
      value: '42', 
      change: '+8%', 
      trend: 'up',
      icon: Users,
      href: '/provider/customers',
    },
    { 
      name: 'Monthly Revenue', 
      value: '$3,240', 
      change: '+12%', 
      trend: 'up',
      icon: CreditCard,
      href: '/provider/subscriptions',
    },
    { 
      name: 'Appointments', 
      value: '76', 
      change: '+5%', 
      trend: 'up',
      icon: Calendar,
      href: '#',
    },
    { 
      name: 'Subscription Growth', 
      value: '24%', 
      change: '-2%', 
      trend: 'down',
      icon: TrendingUp,
      href: '/provider/subscriptions',
    },
  ];

  const recentCustomers = [
    { id: 1, name: 'Emma Thompson', subscription: 'Premium', date: 'May 12, 2025', amount: '$89.00' },
    { id: 2, name: 'Michael Chen', subscription: 'Basic', date: 'May 10, 2025', amount: '$49.00' },
    { id: 3, name: 'Sophia Rodriguez', subscription: 'VIP', date: 'May 9, 2025', amount: '$149.00' },
    { id: 4, name: 'James Wilson', subscription: 'Premium', date: 'May 8, 2025', amount: '$89.00' },
    { id: 5, name: 'Olivia Martinez', subscription: 'Basic', date: 'May 7, 2025', amount: '$49.00' },
  ];

  // Chart data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [1800, 2200, 2400, 2800, 3100, 3240],
        fill: false,
        borderColor: 'rgb(124, 58, 237)',
        tension: 0.1,
        pointBackgroundColor: 'rgb(124, 58, 237)',
      },
    ],
  };

  const subscribersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Subscribers',
        data: [22, 28, 32, 36, 39, 42],
        fill: false,
        borderColor: 'rgb(14, 165, 233)',
        tension: 0.1,
        pointBackgroundColor: 'rgb(14, 165, 233)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Provider Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/s/elite-hair"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            View Storefront
          </Link>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={stat.href}
              className="block overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-primary-50">
                  <stat.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      <span className="flex items-center">
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 mr-0.5" />
                        )}
                        {stat.change}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue</h2>
          <div className="h-64">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Subscribers</h2>
          <div className="h-64">
            <Line data={subscribersData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      {/* Recent subscribers table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="rounded-lg bg-white shadow-sm ring-1 ring-gray-200 mb-8"
      >
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Recent Subscribers</h2>
            <Link
              to="/provider/customers"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.subscription}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Calendar className="h-5 w-5 mr-2 text-gray-400" />
            Manage Schedule
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Users className="h-5 w-5 mr-2 text-gray-400" />
            Add Customer
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <CreditCard className="h-5 w-5 mr-2 text-gray-400" />
            Create Plan
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderDashboard;