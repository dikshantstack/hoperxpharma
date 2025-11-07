import { FiPlus, FiSearch, FiMail, FiPhone, FiEye, FiEdit } from 'react-icons/fi';

export default function Customers() {
  const customers = [
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', phone: '+1 (555) 123-4567', orders: 12, spent: '$2,340', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 (555) 234-5678', orders: 8, spent: '$1,560', status: 'Active' },
    { id: 3, name: 'Mike Davis', email: 'mike.davis@email.com', phone: '+1 (555) 345-6789', orders: 3, spent: '$450', status: 'Inactive' },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@email.com', phone: '+1 (555) 456-7890', orders: 15, spent: '$3,120', status: 'Active' },
    { id: 5, name: 'David Wilson', email: 'david.w@email.com', phone: '+1 (555) 567-8901', orders: 6, spent: '$890', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Customers</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your customer relationships and data</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
          <FiPlus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Total Customers</p>
          <p className="text-xl font-semibold text-gray-900 mt-1">567</p>
          <p className="text-xs text-green-600 mt-1">+15% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Active Customers</p>
          <p className="text-xl font-semibold text-green-600 mt-1">489</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">New This Month</p>
          <p className="text-xl font-semibold text-blue-600 mt-1">78</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Avg. Order Value</p>
          <p className="text-xl font-semibold text-purple-600 mt-1">$156</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Contact</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Orders</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Total Spent</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-medium text-xs">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-xs text-gray-500">ID: {customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <FiMail className="h-3 w-3" />
                      {customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <FiPhone className="h-3 w-3" />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{customer.orders}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{customer.spent}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-emerald-600">
                      <FiEye className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <FiEdit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}