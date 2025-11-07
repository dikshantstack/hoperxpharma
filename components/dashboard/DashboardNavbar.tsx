'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiBell, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  
  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/dashboard/inventory') return 'Inventory';
    if (pathname === '/dashboard/orders') return 'Orders';
    if (pathname === '/dashboard/customers') return 'Customers';
    if (pathname === '/dashboard/reports') return 'Reports';
    if (pathname === '/dashboard/settings') return 'Settings';
    if (pathname === '/dashboard/profile') return 'Profile';
    return 'Dashboard';
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-30">
      <div className="ml-64 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <FiBell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <FiChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john.doe@hoperx.com</p>
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-1">
                    <a href="/dashboard/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <FiUser className="h-4 w-4" />
                      Profile
                    </a>
                    <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                      <FiLogOut className="h-4 w-4" />
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;