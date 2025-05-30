import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Building2, CreditCard, Bell, Lock, Globe, Trash2, Palette, Image as ImageIcon } from 'lucide-react';

const ProviderSettings: React.FC = () => {
  const [businessForm, setBusinessForm] = useState({
    name: 'Elite Hair Studio',
    email: 'contact@elitehair.com',
    phone: '(555) 123-4567',
    address: '123 Style Avenue',
    city: 'Fashion District',
    state: 'CA',
    zipCode: '90210',
    website: 'www.elitehair.com',
    description: 'Premium hair salon services with a focus on quality and style.',
    customDomain: 'elitehair.com',
    colors: {
      primary: '#7C3AED',
      secondary: '#0D9488',
      accent: '#F59E0B',
    },
    logo: 'https://example.com/logo.png',
    coverImage: 'https://example.com/cover.jpg',
    storefrontEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    appointmentReminders: true,
    marketingEmails: false,
    subscriptionAlerts: true,
  });

  const handleBusinessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorChange = (colorType: string, value: string) => {
    setBusinessForm(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorType]: value
      }
    }));
  };

  const handleNotificationChange = (setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handleSaveBusinessInfo = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Business information updated successfully');
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Notification preferences updated successfully');
  };

  const handleDeleteAccount = () => {
    toast.error('This action cannot be undone. Please contact support if you want to delete your account.');
  };

  const handleImageUpload = (type: 'logo' | 'coverImage') => {
    // In a real implementation, this would handle file upload
    toast.success(`${type === 'logo' ? 'Logo' : 'Cover image'} updated successfully`);
  };

  const handleDomainVerification = () => {
    toast.success('Domain verification started. Please check your email for instructions.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your business profile and preferences.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Business Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-labelledby="business-info-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Building2 className="h-6 w-6 text-gray-400" />
              <h2 id="business-info-heading" className="text-lg font-medium leading-6 text-gray-900">
                Business Information
              </h2>
            </div>
            
            <form onSubmit={handleSaveBusinessInfo} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={businessForm.name}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={businessForm.email}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={businessForm.phone}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  value={businessForm.website}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={businessForm.address}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={businessForm.city}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={businessForm.state}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={businessForm.zipCode}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Business Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={businessForm.description}
                  onChange={handleBusinessFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </motion.section>

        {/* Storefront Customization */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          aria-labelledby="storefront-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Palette className="h-6 w-6 text-gray-400" />
              <h2 id="storefront-heading" className="text-lg font-medium leading-6 text-gray-900">
                Storefront Customization
              </h2>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Brand Colors</h3>
                <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <label htmlFor="primaryColor" className="block text-sm text-gray-700">
                      Primary Color
                    </label>
                    <input
                      type="color"
                      id="primaryColor"
                      value={businessForm.colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="mt-1 h-8 w-full rounded-md border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="secondaryColor" className="block text-sm text-gray-700">
                      Secondary Color
                    </label>
                    <input
                      type="color"
                      id="secondaryColor"
                      value={businessForm.colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="mt-1 h-8 w-full rounded-md border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="accentColor" className="block text-sm text-gray-700">
                      Accent Color
                    </label>
                    <input
                      type="color"
                      id="accentColor"
                      value={businessForm.colors.accent}
                      onChange={(e) => handleColorChange('accent', e.target.value)}
                      className="mt-1 h-8 w-full rounded-md border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Brand Assets</h3>
                <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label className="block text-sm text-gray-700">Logo</label>
                    <button
                      type="button"
                      onClick={() => handleImageUpload('logo')}
                      className="mt-1 flex items-center justify-center w-full rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 hover:border-gray-400"
                    >
                      <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2">
                            Upload logo
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Cover Image</label>
                    <button
                      type="button"
                      onClick={() => handleImageUpload('coverImage')}
                      className="mt-1 flex items-center justify-center w-full rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 hover:border-gray-400"
                    >
                      <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2">
                            Upload cover
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Preview Storefront
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Domain Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          aria-labelledby="domain-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Globe className="h-6 w-6 text-gray-400" />
              <h2 id="domain-heading" className="text-lg font-medium leading-6 text-gray-900">
                Domain Settings
              </h2>
            </div>
            
            <div className="mt-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Current URL: elitehair.salonhub.com
                  </p>
                  <div className="mt-4">
                    <label htmlFor="customDomain" className="block text-sm font-medium text-gray-700">
                      Custom Domain
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="customDomain"
                        id="customDomain"
                        value={businessForm.customDomain}
                        onChange={handleBusinessFormChange}
                        className="flex-1 rounded-none rounded-l-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="yourdomain.com"
                      />
                      <button
                        type="button"
                        onClick={handleDomainVerification}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Enter your custom domain to use instead of the default subdomain.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    View DNS Settings
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Configure SSL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Billing Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          aria-labelledby="billing-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <CreditCard className="h-6 w-6 text-gray-400" />
              <h2 id="billing-heading" className="text-lg font-medium leading-6 text-gray-900">
                Billing Information
              </h2>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Current Plan: Professional</p>
                  <p className="text-sm text-gray-500">$49/month</p>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
                >
                  Change Plan
                </button>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-12 rounded bg-gray-200" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">•••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Notification Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          aria-labelledby="notifications-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Bell className="h-6 w-6 text-gray-400" />
              <h2 id="notifications-heading" className="text-lg font-medium leading-6 text-gray-900">
                Notification Preferences
              </h2>
            </div>
            
            <form onSubmit={handleSaveNotifications} className="mt-6">
              <div className="space-y-4">
                {Object.entries(notificationSettings).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <input
                      id={key}
                      name={key}
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor={key} className="ml-3 text-sm text-gray-700">
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        </motion.section>

        {/* Security Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          aria-labelledby="security-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Lock className="h-6 w-6 text-gray-400" />
              <h2 id="security-heading" className="text-lg font-medium leading-6 text-gray-900">
                Security Settings
              </h2>
            </div>
            
            <div className="mt-6 space-y-4">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
              >
                Change Password
              </button>
              
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
              >
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>
        </motion.section>

        {/* Danger Zone */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          aria-labelledby="danger-heading"
          className="bg-white shadow-sm ring-1 ring-gray-200 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center gap-x-3">
              <Trash2 className="h-6 w-6 text-red-500" />
              <h2 id="danger-heading" className="text-lg font-medium leading-6 text-gray-900">
                Danger Zone
              </h2>
            </div>
            
            <div className="mt-6">
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-100"
              >
                Delete Account
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Once you delete your account, it cannot be recovered.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProviderSettings;