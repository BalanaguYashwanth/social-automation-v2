import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Crown, Sparkles } from 'lucide-react';
import { UserProfileCardProps } from '@/types';

export default function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.profileImageUrl}
            alt="profile"
            className="w-14 h-14 rounded-full border-2 border-blue-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, {user.name}!
            </h2>
            <p className="text-gray-600">@{user.screenName}</p>
          </div>
        </div>

        {/* Free Trial Status */}
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Crown className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Free Trial Activated</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-xs font-medium text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                TRIAL
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">
              Automation Status
            </h3>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Active and running</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Next Post</h3>
                  <p className="text-sm text-gray-500">Today, 3:00 PM</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Last Post</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}