/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { BottomNavigation } from '../../components/ui/BottomNavigation';

const menuItems = [
  { icon: '📝', label: 'Edit Profile', link: '/app/account/edit' },
  { icon: '🔔', label: 'Notification Preference', link: '/app/account/notifications' },
//   { icon: '🌙', label: 'Enable Dark Mode', toggle: true },
  { icon: '🏦', label: 'Withdrawal Bank', link: '/app/account/bank' },
  { icon: '💬', label: 'Contact Support', link: '/app/account/support' },
  { icon: '🚪', label: 'Log Out', link: '/auth/login', danger: true }
];

export const Account: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pb-20"
    >
      <div className="p-6">
      <h1 className="w-full text-xl font-semibold text-center mb-4">Account</h1>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <div className="flex gap-1 text-yellow-400 m-2 mt-0 text-xs">
              {'★'.repeat(5)}
            </div>
            <h2 className="text-base font-semibold">Bode Koko</h2>
            <div className="flex items-center gap-1 text-black mb-1 text-sm mt02">
              <MapPin size={16} className='text-[#2A9D8F]'/>
              <span>Ikeja, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1 text-black font-light text-xs mt-2">
              <Phone size={10} className='text-[#2A9D8F]'  />
              <span>+234 806 111 2234</span>
            </div>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {menuItems.map((item: any, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                {item.icon}
              </span>
              <span className={`flex-1 text-left ${item.danger ? 'text-red-500' : ''}`}>
                {item.label}
              </span>
              {item.toggle ? (
                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                </div>
              ) : (
                <ChevronRight className="text-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </motion.div>
  );
};