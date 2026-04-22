import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { iconSize, type IconSize } from '../../tokens/iconSize';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    /** 버튼 크기 */
    size?: IconSize;
    onClick: () => void;
}

export default function IconButton({ icon, size = 'xl', className, ...props }: IconButtonProps) {
    return (
        <button
            className={`
                flex items-center justify-center cursor-pointer disabled:cursor-default
                ${iconSize[size]}
                ${className ?? ''}
            `}
            {...props}
        >
            {icon}
        </button>
    );
}
