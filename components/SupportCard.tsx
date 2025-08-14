import React from 'react';
import { MessageSquare } from 'lucide-react';
import { GOOGLE_FORM } from '@/constants';

export default function SupportCard() {
    return (
        <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Support & Feedback</h3>
            <p className="text-sm text-gray-600 mb-4">
                Have questions or feedback? We'd love to hear from you. Fill out our support form, and we'll get back to you as soon as possible.
            </p>
            <a
                href={GOOGLE_FORM.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
                <MessageSquare className="h-4 w-4 mr-2" />
                Open Support Form
            </a>
        </div>
    );
}