import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

interface DashboardLayoutProps {
  navigation: Array<{ name: string; href: string; icon: React.ElementType }>;
  userType: 'provider' | 'customer';
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ navigation, userType, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar / Topbar logic */}
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;