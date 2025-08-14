'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { InlineErrorDisplayProps } from '@/types';

export default function InlineErrorDisplay({error, onDismiss} : InlineErrorDisplayProps) {
    useEffect(() => {
      if (onDismiss) {
        const timer = setTimeout(() => onDismiss(), 5000);
        return () => clearTimeout(timer);
      }
    }, [onDismiss]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-red-500 text-sm sm:text-base mt-2 flex justify-center"
        >
            <div className="flex items-center max-w-max">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 flex-shrink-0" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                        clipRule="evenodd" 
                    />
                </svg>
                <span>{error}</span>
            </div>
        </motion.div>
    );
}