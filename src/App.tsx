import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProviderDashboard from './pages/provider/ProviderDashboard';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import StorefrontPage from './pages/StorefrontPage';
import ProviderLayout from './components/layouts/ProviderLayout';
import CustomerLayout from './components/layouts/CustomerLayout';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ProviderOnboarding from './pages/provider/ProviderOnboarding';
import ProviderSubscriptions from './pages/provider/ProviderSubscriptions';
import ProviderCustomers from './pages/provider/ProviderCustomers';
import ProviderSettings from './pages/provider/ProviderSettings';
import CustomerSubscriptions from './pages/customer/CustomerSubscriptions';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/s/:storeId" element={<StorefrontPage />} />
      
      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="onboarding" element={<ProviderOnboarding />} />
        <Route index element={<Navigate to="/auth/login\" replace />} />
      </Route>
      
      {/* Provider routes */}
      <Route path="/provider" element={<ProviderLayout />}>
        <Route path="dashboard" element={<ProviderDashboard />} />
        <Route path="subscriptions" element={<ProviderSubscriptions />} />
        <Route path="customers" element={<ProviderCustomers />} />
        <Route path="settings" element={<ProviderSettings />} />
        <Route index element={<Navigate to="/provider/dashboard\" replace />} />
      </Route>
      
      {/* Customer routes */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="subscriptions" element={<CustomerSubscriptions />} />
        <Route index element={<Navigate to="/customer/dashboard\" replace />} />
      </Route>
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;