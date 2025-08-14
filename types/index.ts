export interface UserProfile {
    id: string;
    screenName: string;
    name: string;
    profileImageUrl: string;
    linkedAt?: string;
}

export interface DashboardHeaderProps {
    user: UserProfile;
    onLogout: () => void;
}

export interface OptOutCardProps {
    onOptOutClick: () => void;
}

export interface OptOutModalProps {
    isOpen: boolean;
    isSubmitting: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export interface UserProfileCardProps {
  user: UserProfile;
}

export interface LoadingSpinnerProps {
    message: string;
}

export interface ErrorDisplayProps {
    error: string;
}

export interface InlineErrorDisplayProps {
  error: string;
  onDismiss?: () => void;
}

export type ErrorState = {
  message: string;
  source: 'hero' | 'cta' | 'try-out' | null;
} | null;