import DashboardLayout from '../ui/DashboardLayout';

const ProviderLayout = () => {
  const nav = [
    { name: 'Dashboard', href: '/provider/dashboard', icon: LayoutDashboard },
    // Add more links
  ];

  return <DashboardLayout navigation={nav} userType="provider" />;
};