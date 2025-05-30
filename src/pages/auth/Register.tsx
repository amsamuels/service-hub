import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'provider',
    fullName: '',
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      accountType: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('You must agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Account created successfully');
      
      if (formData.accountType === 'provider') {
        navigate('/auth/onboarding');
      } else {
        navigate('/customer/dashboard');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
          Full name
        </label>
        <div className="mt-2">
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
          Confirm password
        </label>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Account type
        </label>
        <div className="flex gap-4">
          <div className="flex items-center">
            <input
              id="provider"
              name="accountType"
              type="radio"
              value="provider"
              checked={formData.accountType === 'provider'}
              onChange={handleRadioChange}
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
            />
            <label htmlFor="provider" className="ml-2 block text-sm font-medium leading-6 text-gray-900">
              Service Provider
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="customer"
              name="accountType"
              type="radio"
              value="customer"
              checked={formData.accountType === 'customer'}
              onChange={handleRadioChange}
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
            />
            <label htmlFor="customer" className="ml-2 block text-sm font-medium leading-6 text-gray-900">
              Customer
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
        />
        <label htmlFor="agreeToTerms" className="ml-3 block text-sm leading-6 text-gray-700">
          I agree to the{' '}
          <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">
            terms and conditions
          </a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>
      </div>
    </form>
  );
};

export default Register;