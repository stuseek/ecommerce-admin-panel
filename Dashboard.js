import { useState, useEffect } from "react";

interface Metrics {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
  });

  useEffect(() => {
    // Simulated API fetch (replace with real API call)
    setTimeout(() => {
      setMetrics({
        totalSales: 52340,
        totalOrders: 178,
        totalCustomers: 250,
      });
    }, 1000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-500">Total Sales</h2>
          <p className="text-2xl font-bold text-blue-600">${metrics.totalSales.toLocaleString()}</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold text-green-600">{metrics.totalOrders.toLocaleString()}</p>
        </div>

        {/* Total Customers */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-500">Total Customers</h2>
          <p className="text-2xl font-bold text-purple-600">{metrics.totalCustomers.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
