'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiPackage, 
  FiShoppingCart, 
  FiUsers, 
  FiBarChart, 
  FiSettings 
} from 'react-icons/fi';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Inventory', href: '/dashboard/inventory', icon: FiPackage },
    { name: 'Orders', href: '/dashboard/orders', icon: FiShoppingCart },
    { name: 'Customers', href: '/dashboard/customers', icon: FiUsers },
    { name: 'Reports', href: '/dashboard/reports', icon: FiBarChart },
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-emerald-500 rounded flex items-center justify-center">
            <span className="text-white font-semibold text-xs">H</span>
          </div>
          <span className="font-semibold text-gray-900">HopeRx</span>
        </div>
      </div>
      
      <nav className="px-3 mt-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 mb-1 rounded-md text-sm transition-colors ${
                isActive 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-gray-700' : 'text-gray-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;