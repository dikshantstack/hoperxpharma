import { FiPlus, FiSearch, FiFilter, FiEdit, FiTrash2, FiAlertTriangle } from 'react-icons/fi';

export default function Inventory() {
  const products = [
    { id: 1, name: 'Aspirin 100mg', category: 'Pain Relief', stock: 150, price: '$12.99', status: 'In Stock' },
    { id: 2, name: 'Vitamin D3', category: 'Supplements', stock: 5, price: '$24.99', status: 'Low Stock' },
    { id: 3, name: 'Ibuprofen 200mg', category: 'Pain Relief', stock: 0, price: '$15.99', status: 'Out of Stock' },
    { id: 4, name: 'Omega-3 Fish Oil', category: 'Supplements', stock: 89, price: '$29.99', status: 'In Stock' },
    { id: 5, name: 'Acetaminophen', category: 'Pain Relief', stock: 12, price: '$9.99', status: 'Low Stock' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Inventory</h1>
          <p className="text-sm text-gray-600 mt-1">Manage products and stock levels</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
          <FiPlus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Total Products</p>
          <p className="text-xl font-semibold text-gray-900 mt-1">89</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">In Stock</p>
          <p className="text-xl font-semibold text-green-600 mt-1">67</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Low Stock</p>
          <p className="text-xl font-semibold text-yellow-600 mt-1">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-xs text-gray-500">Out of Stock</p>
          <p className="text-xl font-semibold text-red-600 mt-1">7</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          <FiFilter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Product</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Stock</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Price</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    {product.stock <= 10 && product.stock > 0 && (
                      <FiAlertTriangle className="h-3 w-3 text-yellow-500" />
                    )}
                    <span className={`text-sm ${
                      product.stock === 0 ? 'text-red-600' : 
                      product.stock <= 10 ? 'text-yellow-600' : 'text-gray-900'
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{product.price}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    product.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                    product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-emerald-600">
                      <FiEdit className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600">
                      <FiTrash2 className="h-4 w-4" />
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