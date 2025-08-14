import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Zap } from 'lucide-react';
import { DashboardHeaderProps } from '@/types';

export default function DashboardHeader({ user, onLogout }: DashboardHeaderProps) {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2"
                    >
                        <Zap className="h-6 w-6 text-blue-500" />
                        <h1 className="text-xl font-bold text-gray-800">BuzzAgent</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="hidden sm:flex items-center space-x-2">
                            <img
                                src={user.profileImageUrl}
                                alt="profile"
                                className="w-8 h-8 rounded-full border-2 border-blue-200"
                            />
                            <span className="font-medium text-gray-700">{user.name}</span>
                        </div>
                        <button
                            onClick={onLogout}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}