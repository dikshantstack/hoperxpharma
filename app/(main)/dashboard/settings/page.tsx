import { FiSave, FiBell, FiShield, FiUser, FiDatabase, FiMail } from 'react-icons/fi';

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your account and application preferences</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
          <FiSave className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-4">
            <nav className="space-y-1">
              <a href="#profile" className="flex items-center gap-3 px-3 py-2 text-gray-900 bg-gray-100 rounded">
                <FiUser className="h-4 w-4" />
                Profile
              </a>
              <a href="#notifications" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded">
                <FiBell className="h-4 w-4" />
                Notifications
              </a>
              <a href="#security" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded">
                <FiShield className="h-4 w-4" />
                Security
              </a>
              <a href="#integrations" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded">
                <FiDatabase className="h-4 w-4" />
                Integrations
              </a>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-lg">
            <div className="p-5">
              <h2 className="font-medium text-gray-900 mb-1">Profile Settings</h2>
              <p className="text-sm text-gray-600 mb-6">Update your personal information</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@hoperx.com"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Experienced pharmaceutical administrator with over 10 years in the industry."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg">
            <div className="p-5">
              <h2 className="font-medium text-gray-900 mb-1">Notification Preferences</h2>
              <p className="text-sm text-gray-600 mb-6">Choose what notifications you want to receive</p>
              
              <div className="space-y-4">
                {[
                  { title: 'Email Notifications', desc: 'Receive email updates about orders and inventory', checked: true },
                  { title: 'Low Stock Alerts', desc: 'Get notified when products are running low', checked: true },
                  { title: 'Order Updates', desc: 'Notifications for new orders and status changes', checked: false },
                  { title: 'Weekly Reports', desc: 'Receive weekly performance summaries', checked: true },
                  { title: 'Marketing Updates', desc: 'Product updates and promotional content', checked: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg">
            <div className="p-5">
              <h2 className="font-medium text-gray-900 mb-1">Security Settings</h2>
              <p className="text-sm text-gray-600 mb-6">Manage your account security</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}