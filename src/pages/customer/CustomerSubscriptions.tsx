import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, ArrowRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerSubscriptions: React.FC = () => {
  // Mock data for active subscriptions
  const activeSubscriptions = [
    {
      id: 1,
      provider: 'Elite Hair Studio',
      plan: 'Premium',
      price: 89,
      nextPayment: '2025-05-20',
      status: 'active',
      visitsRemaining: 2,
      nextVisit: '2025-05-15',
      features: [
        'Haircut & Style',
        'Deep Conditioning',
        '15% off products',
        'Priority booking',
      ],
    },
    {
      id: 2,
      provider: 'Zen Spa & Wellness',
      plan: 'Basic',
      price: 49,
      nextPayment: '2025-05-25',
      status: 'active',
      visitsRemaining: 1,
      nextVisit: '2025-05-18',
      features: [
        'Basic Massage',
        '10% off products',
        'Standard booking',
      ],
    },
  ];

  // Mock data for subscription history
  const subscriptionHistory = [
    {
      id: 3,
      provider: 'Glow Beauty Salon',
      plan: 'Basic',
      amount: 59,
      date: '2025-04-15',
      status: 'completed',
    },
    {
      id: 4,
      provider: 'Elite Hair Studio',
      plan: 'Premium',
      amount: 89,
      date: '2025-04-01',
      status: 'completed',
    },
    {
      id: 5,
      provider: 'Zen Spa & Wellness',
      plan: 'Basic',
      amount: 49,
      date: '2025-03-25',
      status: 'failed',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Subscriptions</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your active subscriptions and view history.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/s/elite-hair"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Browse Services
          </Link>
        </div>
      </div>

      {/* Active Subscriptions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        {activeSubscriptions.map((subscription, index) => (
          <motion.div
            key={subscription.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {subscription.provider}
                  </h3>
                  <p className="text-sm text-gray-500">{subscription.plan} Plan</p>
                </div>
              </div>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                  subscription.status
                )}`}
              >
                {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Next Payment</p>
                <p className="mt-1 text-sm text-gray-900">${subscription.price}</p>
                <p className="text-xs text-gray-500">{subscription.nextPayment}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Visits Remaining</p>
                <p className="mt-1 text-sm text-gray-900">{subscription.visitsRemaining}</p>
                <p className="text-xs text-gray-500">Next: {subscription.nextVisit}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900">Included Services</h4>
              <ul className="mt-2 grid grid-cols-1 gap-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Manage Plan
              </button>
              <button
                type="button"
                className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Book Visit
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          {
            label: 'Active Subscriptions',
            value: activeSubscriptions.length,
            icon: CreditCard,
          },
          {
            label: 'Total Monthly Spend',
            value: `$${activeSubscriptions.reduce((acc, sub) => acc + sub.price, 0)}`,
            icon: ArrowRight,
          },
          {
            label: 'Next Visit',
            value: 'May 15',
            icon: Calendar,
          },
          {
            label: 'Total Visits Available',
            value: activeSubscriptions.reduce((acc, sub) => acc + sub.visitsRemaining, 0),
            icon: CheckCircle,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-gray-200"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-md bg-primary-50">
                <stat.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscription History */}
      <div className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Payment History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Provider
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Plan
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscriptionHistory.map((payment, index) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.provider}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {getStatusIcon(payment.status)}
                      <span className="ml-2">
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerSubscriptions;