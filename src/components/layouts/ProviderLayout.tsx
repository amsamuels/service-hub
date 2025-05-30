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
    <div className="min-h-screen bg-beige">
      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/80 lg:hidden',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
        onClick={toggleMobileMenu}
      />

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-background transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-auto',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-gray-200 bg-background">
          <div className="flex h-16 shrink-0 items-center justify-between px-4">
            <Logo />
            <button
              className="rounded-md p-2 text-gray-500 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                      isActive
                        ? 'bg-secondary text-text'
                        : 'text-gray-600 hover:bg-beige hover:text-text'
                    )
                  }
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      'text-gray-400 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="border-t border-gray-200 p-4">
              <NavLink
                to="/auth/login"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-beige hover:text-text"
              >
                <LogOut
                  className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Sign out
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex h-full flex-col overflow-y-auto border-r border-gray-200 bg-background">
          <div className="flex h-16 shrink-0 items-center px-6">
            <Logo />
          </div>
          <div className="flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                      isActive
                        ? 'bg-secondary text-text'
                        : 'text-gray-600 hover:bg-beige hover:text-text'
                    )
                  }
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      'text-gray-400 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="border-t border-gray-200 p-4">
              <NavLink
                to="/auth/login"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-beige hover:text-text"
              >
                <LogOut
                  className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Sign out
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
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
                className="-m-2.5 p-2.5 text-gray-500 hover:text-text"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-x-3 rounded-full bg-background p-1.5 text-sm font-semibold leading-6 text-text"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-beige">
                    <span className="text-xs font-medium leading-none text-text">SP</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProviderLayout;