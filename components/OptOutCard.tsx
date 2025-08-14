import React from 'react';
import { ShieldX } from 'lucide-react';
import { OptOutCardProps } from '@/types';

export default function OptOutCard({ onOptOutClick }: OptOutCardProps) {
    return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-red-800">Opt Out</h3>
                    <p className="text-sm text-red-600">This will permanently remove your account from the service.</p>
                </div>
                <button
                    onClick={onOptOutClick}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center sm:w-auto w-full"
                >
                    <ShieldX className="h-4 w-4 mr-2" />
                    Opt Out
                </button>
            </div>
        </div>
    );
}