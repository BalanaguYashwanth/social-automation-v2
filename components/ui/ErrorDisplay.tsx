'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ErrorDisplayProps } from '@/types';

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md p-6 bg-white rounded-xl shadow-md text-center"
            >
                <div className="text-red-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Session Error</h2>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                    onClick={() => router.push('/login')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Return to Login
                </button>
            </motion.div>
        </div>
    );
}