import { FiDownload, FiCalendar, FiTrendingUp, FiDollarSign, FiShoppingCart, FiUsers } from 'react-icons/fi';

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-600 mt-1">Track performance and generate insights</p>
        </div>
        <div className="flex gap-3">
          <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
            <FiDownload className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <FiDollarSign className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-green-600 font-medium">+12%</span>
          </div>
          <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
          <p className="text-xl font-semibold text-gray-900">$45,678</p>
        </div>

        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <FiShoppingCart className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <p className="text-xs text-gray-500 mb-1">Total Orders</p>
          <p className="text-xl font-semibold text-gray-900">1,234</p>
        </div>

        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <FiUsers className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-green-600 font-medium">+15%</span>
          </div>
          <p className="text-xs text-gray-500 mb-1">New Customers</p>
          <p className="text-xl font-semibold text-gray-900">78</p>
        </div>

        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <FiCalendar className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-green-600 font-medium">+5%</span>
          </div>
          <p className="text-xs text-gray-500 mb-1">Avg Order Value</p>
          <p className="text-xl font-semibold text-gray-900">$156</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Revenue Trend</h3>
            <select className="text-sm bg-white border border-gray-200 rounded px-3 py-1">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500 text-sm">Chart visualization would go here</p>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-5 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Aspirin 100mg', sales: 234, revenue: '$2,340' },
              { name: 'Vitamin D3', sales: 189, revenue: '$1,890' },
              { name: 'Ibuprofen 200mg', sales: 156, revenue: '$1,560' },
              { name: 'Omega-3 Fish Oil', sales: 134, revenue: '$1,340' },
              { name: 'Acetaminophen', sales: 98, revenue: '$980' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sales} units sold</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white p-5 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-4">Quick Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
            <h4 className="font-medium text-gray-900 mb-1">Sales Summary</h4>
            <p className="text-sm text-gray-600">Complete sales overview with trends</p>
          </button>
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
            <h4 className="font-medium text-gray-900 mb-1">Inventory Report</h4>
            <p className="text-sm text-gray-600">Stock levels and movement analysis</p>
          </button>
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
            <h4 className="font-medium text-gray-900 mb-1">Customer Analytics</h4>
            <p className="text-sm text-gray-600">Customer behavior and demographics</p>
          </button>
        </div>
      </div>
    </div>
  );
}