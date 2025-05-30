// src/components/layouts/ProviderLayout.tsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
} from 'lucide-react';
import Logo from '../ui/Logo';

const ProviderLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigation = [
    { name: 'Dashboard', href: '/provider/dashboard', icon: LayoutDashboard },
    { name: 'Subscriptions', href: '/provider/subscriptions', icon: CreditCard },
    { name: 'Customers', href: '/provider/customers', icon: Users },
    { name: 'Settings', href: '/provider/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 lg:hidden',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
        onClick={toggleMobileMenu}
      />

      {/* Sidebar - Off-canvas for mobile, fixed for desktop */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Logo />
          <button
            className="rounded-md p-2 text-gray-500 lg:hidden"
            onClick={toggleMobileMenu}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <NavLink
            to="/auth/login"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Sign out
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-x-3 rounded-full bg-white p-1.5 text-sm font-semibold leading-6 text-gray-900"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xs font-medium text-primary-700">SP</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProviderLayout;