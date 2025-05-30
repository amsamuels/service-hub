import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown, MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  subscription: string;
  status: 'active' | 'inactive' | 'pending';
  startDate: string;
  lastVisit: string;
  totalSpent: number;
  visits: number;
}

const ProviderCustomers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock customer data
  const customers: Customer[] = [
    {
      id: '1',
      name: 'Emma Thompson',
      email: 'emma.t@example.com',
      phone: '(555) 123-4567',
      subscription: 'Premium',
      status: 'active',
      startDate: '2025-01-15',
      lastVisit: '2025-05-01',
      totalSpent: 445,
      visits: 5,
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '(555) 234-5678',
      subscription: 'Basic',
      status: 'active',
      startDate: '2025-02-01',
      lastVisit: '2025-04-28',
      totalSpent: 245,
      visits: 3,
    },
    {
      id: '3',
      name: 'Sophia Rodriguez',
      email: 'sophia.r@example.com',
      phone: '(555) 345-6789',
      subscription: 'VIP',
      status: 'active',
      startDate: '2025-01-01',
      lastVisit: '2025-05-02',
      totalSpent: 745,
      visits: 8,
    },
    {
      id: '4',
      name: 'James Wilson',
      email: 'james.w@example.com',
      phone: '(555) 456-7890',
      subscription: 'Premium',
      status: 'inactive',
      startDate: '2025-02-15',
      lastVisit: '2025-04-15',
      totalSpent: 178,
      visits: 2,
    },
    {
      id: '5',
      name: 'Olivia Martinez',
      email: 'olivia.m@example.com',
      phone: '(555) 567-8901',
      subscription: 'Basic',
      status: 'pending',
      startDate: '2025-04-28',
      lastVisit: '-',
      totalSpent: 49,
      visits: 0,
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your customer relationships.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Add Customer
          </button>
        </div>
      </div>

      {/* Filters and search */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="relative">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Customer stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: 'Total Customers', value: customers.length },
          { label: 'Active Subscribers', value: customers.filter(c => c.status === 'active').length },
          { label: 'Avg. Customer Value', value: `$${Math.round(customers.reduce((acc, c) => acc + c.totalSpent, 0) / customers.length)}` },
          { label: 'Total Revenue', value: `$${customers.reduce((acc, c) => acc + c.totalSpent, 0)}` },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
          >
            <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
          </motion.div>
        ))}
      </div>

      {/* Customers table */}
      <div className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Customer
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Subscription
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Start Date
                  <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCustomers.map((customer, index) => (
              <motion.tr
                key={customer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-700 font-medium text-sm">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{customer.subscription}</div>
                  <div className="text-sm text-gray-500">{customer.visits} visits</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(customer.status)}`}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${customer.totalSpent}</div>
                  <div className="text-sm text-gray-500">Lifetime</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-3">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Calendar className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProviderCustomers;