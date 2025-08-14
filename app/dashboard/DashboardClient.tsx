'use client';

export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/lib/api';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorDisplay from '@/components/ui/ErrorDisplay';
import DashboardHeader from '@/components/DashboardHeader';
import UserProfileCard from '@/components/UserProfileCard';
import SupportCard from '@/components/SupportCard';
import OptOutCard from '@/components/OptOutCard';
import OptOutModal from '@/components/OptOutModal';
import { UserProfile } from '@/types';
import { API, REDIRECT } from '@/constants';

export default function DashboardClient() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOptOutModalOpen, setIsOptOutModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const userId = searchParams.get('userId');

        if (!userId) {
            setError('No user session found. Please log in again.');
            setLoading(false);
            setTimeout(() => router.push(REDIRECT.LOGIN), 3000);
            return;
        }

        fetchUser(userId);
    }, [searchParams, router]);

    const fetchUser = async (userId: string) => {
        try {
            const response = await api.get(`${API.FETCH_USER}?userId=${userId}`);
            setUser(response.data);
            localStorage.setItem('twitterUserId', userId);
        } catch (err) {
            console.error("Failed to fetch user data", err);
            setError("Could not retrieve your profile. Please try logging in again.");
            localStorage.removeItem('twitterUserId');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('twitterUserId');
        router.push(REDIRECT.HOME);
    };

    const handleOptOut = async () => {
        if (!user) return;
        setIsSubmitting(true);
        setError(null);

        try {
            await api.post(API.OPT_OUT, { userId: user.id });
            localStorage.removeItem('twitterUserId');
            router.push(`${REDIRECT.LOGIN}?message=opt-out-success`);
        } catch (err) {
            console.error("Failed to opt out", err);
            setError("Failed to process your opt-out request. Please try again or contact support.");
            setIsSubmitting(false);
            setIsOptOutModalOpen(false);
        }
    };

    if (loading) {
        return <LoadingSpinner message='Loading your dashboard...' />;
    }

    if (error) {
        return <ErrorDisplay error={error} />
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50">
                {user && <DashboardHeader user={user} onLogout={handleLogout} />}

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {user && (
                        <div className="flex justify-center">
                          <div className="w-full max-w-2xl">
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 space-y-6">
                              <UserProfileCard user={user} />
                              <SupportCard />
                              <OptOutCard onOptOutClick={() => setIsOptOutModalOpen(true)} />
                            </div>
                          </div>
                        </div>
                    )}
                </main>
            </div>

            <OptOutModal
                isOpen={isOptOutModalOpen}
                isSubmitting={isSubmitting}
                onClose={() => setIsOptOutModalOpen(false)}
                onConfirm={handleOptOut}
            />
        </>
    );  
}