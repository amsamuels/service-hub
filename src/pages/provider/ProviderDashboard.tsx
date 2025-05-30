// src/pages/provider/ProviderDashboard.tsx
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const stats = [
  { name: 'Total Subscribers', value: '42', change: '+8%' },
  { name: 'Monthly Revenue', value: '$3,240', change: '+12%' },
  { name: 'Appointments', value: '76', change: '+5%' },
];

const ProviderDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card key={stat.name}>
          <h3 className="text-lg font-semibold">{stat.name}</h3>
          <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          <p className={`mt-1 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {stat.change}
          </p>
          <Button variant="outline" className="mt-4 w-full">View Details</Button>
        </Card>
      ))}
    </div>
  );
};