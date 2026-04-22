import { type ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'black';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-brand-main1 text-white hover:bg-brand-main1-dark',
    secondary: 'bg-white text-gray-700 hover:text-gray-600',
    outline: 'border border-gray-200 bg-white text-gray-700',
    ghost: 'bg-transparent',
    danger: 'bg-status-error text-white',
    black: 'bg-gray-800 text-white hover:bg-gray-700',
};

const sizeStyles: Record<ButtonSize, string> = {
    xs: 'h-8 px-3',
    sm: 'h-[35px] px-2.5',
    md: 'h-9 px-4',
    lg: 'h-10 px-5',
    xl: 'h-14 px-8',
    icon: 'w-9 h-9 p-0',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', size = 'md', loading = false, className, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={loading || disabled}
                className={`
          inline-flex items-center justify-center
          rounded-lg
          text-body-1
          transition-all duration-200 ease-in-out
          cursor-pointer
          disabled:opacity-50 disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className ?? ''}
        `}
                {...props}
            >
                {loading ? 'Loading...' : children}
            </button>
        );
    },
);

Button.displayName = 'Button';
