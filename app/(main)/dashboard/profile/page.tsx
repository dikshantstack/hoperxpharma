import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit3 } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
        <div className="px-8 pb-8">
          <div className="flex items-end -mt-16 mb-6">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
            </div>
            <div className="ml-6 pb-2">
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600">Administrator</p>
            </div>
            <div className="ml-auto pb-2">
              <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                <FiEdit3 className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <FiUser className="mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">John Doe</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <FiMail className="mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">john.doe@hoperx.com</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <FiPhone className="mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <FiMapPin className="mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">New York, NY</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900">Experienced pharmaceutical administrator with over 10 years in the industry. Passionate about improving healthcare delivery and patient outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <FiCalendar className="mr-3 h-5 w-5 text-gray-400" />
                  <span className="text-gray-900">January 2023</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                    Administrator
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Quick Stats</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Orders Processed</span>
                <span className="font-semibold text-gray-900">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Revenue Generated</span>
                <span className="font-semibold text-gray-900">$45,678</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Customers Served</span>
                <span className="font-semibold text-gray-900">567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}