import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiShoppingCart, FiUsers, FiPackage } from 'react-icons/fi';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: FiShoppingCart,
      color: 'emerald'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8%',
      trend: 'up',
      icon: FiDollarSign,
      color: 'blue'
    },
    {
      title: 'Customers',
      value: '567',
      change: '+15%',
      trend: 'up',
      icon: FiUsers,
      color: 'purple'
    },
    {
      title: 'Products',
      value: '89',
      change: '+3%',
      trend: 'up',
      icon: FiPackage,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <Icon className="h-5 w-5 text-gray-400" />
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg">
          <div className="p-5">
            <h3 className="font-medium text-gray-900 mb-4">Recent Orders</h3>
            <div className="space-y-3">
              {[
                { id: '#1001', amount: '$234.50', customer: 'John Smith', status: 'Completed' },
                { id: '#1002', amount: '$156.75', customer: 'Sarah Johnson', status: 'Processing' },
                { id: '#1003', amount: '$89.25', customer: 'Mike Davis', status: 'Pending' }
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Low Stock Items */}
        <div className="bg-white rounded-lg">
          <div className="p-5">
            <h3 className="font-medium text-gray-900 mb-4">Low Stock Alert</h3>
            <div className="space-y-3">
              {[
                { name: 'Aspirin 100mg', stock: 5, category: 'Pain Relief' },
                { name: 'Vitamin D3', stock: 12, category: 'Supplements' },
                { name: 'Ibuprofen 200mg', stock: 8, category: 'Pain Relief' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded">
                    {item.stock} left
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}