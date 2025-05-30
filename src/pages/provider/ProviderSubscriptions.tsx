import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Edit, Trash2, ArrowUpDown, Search } from 'lucide-react';

interface Subscription {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  active: boolean;
  subscribers: number;
}

const ProviderSubscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      interval: 'month',
      description: 'Perfect for basic maintenance',
      features: ['1 haircut per month', 'Basic styling', '10% off products', 'Free consultations'],
      active: true,
      subscribers: 18,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 89,
      interval: 'month',
      description: 'Our most popular package',
      features: ['2 services per month', 'Advanced styling', '15% off products', 'Priority booking', 'Free touch-ups'],
      active: true,
      subscribers: 24,
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 149,
      interval: 'month',
      description: 'The ultimate experience',
      features: ['Unlimited haircuts', 'All styling services', '25% off products', 'VIP booking', 'Free touch-ups', 'Complimentary beverages'],
      active: true,
      subscribers: 6,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState<Subscription | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditSubscription = (subscription: Subscription) => {
    setEditingSubscription(subscription);
    setIsModalOpen(true);
  };

  const handleCreateSubscription = () => {
    setEditingSubscription(null);
    setIsModalOpen(true);
  };

  const handleToggleActive = (id: string) => {
    setSubscriptions(
      subscriptions.map((subscription) =>
        subscription.id === id
          ? { ...subscription, active: !subscription.active }
          : subscription
      )
    );
  };

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Subscription Plans</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your subscription plans and pricing.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            onClick={handleCreateSubscription}
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Plan
          </button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="mb-6">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            placeholder="Search plans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Subscriptions list */}
      <div className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg overflow-hidden mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Plan
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Price
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Subscribers
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSubscriptions.map((subscription, index) => (
              <motion.tr
                key={subscription.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100">
                      <Package className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{subscription.name}</div>
                      <div className="text-sm text-gray-500">{subscription.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${subscription.price}</div>
                  <div className="text-sm text-gray-500">per {subscription.interval}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subscription.subscribers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      subscription.active
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {subscription.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-3">
                    <button
                      onClick={() => handleToggleActive(subscription.id)}
                      className={`text-xs px-2 py-1 rounded ${
                        subscription.active
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {subscription.active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleEditSubscription(subscription)}
                      className="text-primary-600 hover:text-primary-900"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Subscription Performance */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold text-gray-900">$4,680</p>
          <p className="mt-1 text-sm text-gray-500">Monthly recurring revenue</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-2">Most Popular</h2>
          <p className="text-3xl font-bold text-gray-900">Premium</p>
          <p className="mt-1 text-sm text-gray-500">24 subscribers (57% of total)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-2">Avg. Revenue Per User</h2>
          <p className="text-3xl font-bold text-gray-900">$97.50</p>
          <p className="mt-1 text-sm text-gray-500">Across all subscriptions</p>
        </motion.div>
      </div>

      {/* Modal for creating/editing subscription plans */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {editingSubscription ? 'Edit Subscription Plan' : 'Create Subscription Plan'}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {editingSubscription
                        ? 'Update the details of your subscription plan'
                        : 'Fill in the details to create a new subscription plan'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  {editingSubscription ? 'Save Changes' : 'Create Plan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderSubscriptions;