import { FiEye, FiDownload, FiFilter, FiSearch } from 'react-icons/fi';

export default function Orders() {
  const orders = [
    { id: '#1001', customer: 'John Smith', date: '2024-01-15', total: '$234.50', status: 'Completed', items: 3 },
    { id: '#1002', customer: 'Sarah Johnson', date: '2024-01-15', total: '$156.75', status: 'Processing', items: 2 },
    { id: '#1003', customer: 'Mike Davis', date: '2024-01-14', total: '$89.25', status: 'Pending', items: 1 },
    { id: '#1004', customer: 'Emily Brown', date: '2024-01-14', total: '$312.00', status: 'Shipped', items: 4 },
    { id: '#1005', customer: 'David Wilson', date: '2024-01-13', total: '$67.50', status: 'Cancelled', items: 1 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Orders</h1>
          <p className="text-sm text-gray-600 mt-1">Track and manage customer orders</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
          <FiDownload className="h-4 w-4" />
          Export Orders
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Total Orders</p>
          <p className="text-xl font-semibold text-gray-900 mt-1">1,234</p>
          <p className="text-xs text-green-600 mt-1">+12% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Pending</p>
          <p className="text-xl font-semibold text-yellow-600 mt-1">23</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Processing</p>
          <p className="text-xl font-semibold text-blue-600 mt-1">45</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Completed</p>
          <p className="text-xl font-semibold text-green-600 mt-1">1,166</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
          <option>All Status</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
          <FiFilter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Items</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Total</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-emerald-600">{order.id}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{order.items} items</td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{order.total}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-1 px-2 py-1 text-sm text-emerald-600 hover:bg-emerald-50 rounded">
                    <FiEye className="h-4 w-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}