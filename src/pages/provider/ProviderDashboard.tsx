import React from 'react';
import { motion } from 'framer-motion';
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
  Filler,
} from 'chart.js';
import {
  Users,
  CreditCard,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  ChevronRight,
  Clock,
  DollarSign,
  UserPlus,
  Star,
} from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
      name: 'Active Appointments', 
      value: '76', 
      change: '+5%', 
      trend: 'up',
      icon: Calendar,
      href: '#',
    },
    { 
      name: 'Customer Growth', 
      value: '24%', 
      change: '-2%', 
      trend: 'down',
      icon: TrendingUp,
      href: '/provider/customers',
    },
  ];

  const recentCustomers = [
    { id: 1, name: 'Emma Thompson', subscription: 'Premium', date: 'May 12, 2025', amount: '$89.00', status: 'active' },
    { id: 2, name: 'Michael Chen', subscription: 'Basic', date: 'May 10, 2025', amount: '$49.00', status: 'active' },
    { id: 3, name: 'Sophia Rodriguez', subscription: 'VIP', date: 'May 9, 2025', amount: '$149.00', status: 'pending' },
    { id: 4, name: 'James Wilson', subscription: 'Premium', date: 'May 8, 2025', amount: '$89.00', status: 'active' },
    { id: 5, name: 'Olivia Martinez', subscription: 'Basic', date: 'May 7, 2025', amount: '$49.00', status: 'active' },
  ];

  const upcomingAppointments = [
    { id: 1, customer: 'Emma Thompson', service: 'Haircut & Style', time: '10:00 AM', date: 'Today' },
    { id: 2, customer: 'Michael Chen', service: 'Beard Trim', time: '2:30 PM', date: 'Today' },
    { id: 3, customer: 'Sophia Rodriguez', service: 'Color Treatment', time: '11:00 AM', date: 'Tomorrow' },
  ];

  // Revenue Chart Data
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

  const customerData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Customers',
        data: [15, 20, 18, 25, 22, 24],
        fill: true,
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        borderColor: 'rgb(14, 165, 233)',
        tension: 0.4,
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
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.dataset.label === 'Monthly Revenue' ? '$' : '';
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          callback: function(value: any) {
            return this.chart.data.datasets[0].label === 'Monthly Revenue' ? '$' + value : value;
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your business today.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link
            to="/provider/settings"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
          <Link
            to="/s/elite-hair"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            View Storefront
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Revenue Overview</h2>
              <p className="text-sm text-gray-500">Monthly revenue trends</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-gray-900">$3,240</span>
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                12%
              </span>
            </div>
          </div>
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Customer Growth</h2>
              <p className="text-sm text-gray-500">New customers per month</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-gray-900">24</span>
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                8%
              </span>
            </div>
          </div>
          <div className="h-64">
            <Line data={customerData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-blue-50">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Session Time</p>
              <p className="text-xl font-semibold text-gray-900">45 min</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-green-50">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Revenue/Customer</p>
              <p className="text-xl font-semibold text-gray-900">$92.50</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-purple-50">
              <UserPlus className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">New Customers</p>
              <p className="text-xl font-semibold text-gray-900">+12 this week</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-yellow-50">
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Rating</p>
              <p className="text-xl font-semibold text-gray-900">4.8/5.0</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Subscribers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
          className="rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Recent Subscribers</h2>
              <Link
                to="/provider/customers"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {recentCustomers.map((customer) => (
                  <li key={customer.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary-700">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">{customer.name}</p>
                        <p className="truncate text-sm text-gray-500">
                          {customer.subscription} • {customer.date}
                        </p>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                            customer.status
                          )}`}
                        >
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
              <Link
                to="#"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                View calendar
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <li key={appointment.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {appointment.customer}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {appointment.service} • {appointment.time}
                        </p>
                      </div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {appointment.date}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Calendar className="h-5 w-5 mr-2 text-gray-400" />
            Add Appointment
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Users className="h-5 w-5 mr-2 text-gray-400" />
            New Customer
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Bell className="h-5 w-5 mr-2 text-gray-400" />
            Send Update
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <CreditCard className="h-5 w-5 mr-2 text-gray-400" />
            View Revenue
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderDashboard;