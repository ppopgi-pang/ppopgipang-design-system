export const iconSize = {
    xs: 'w-3 h-3', // 12px
    sm: 'w-4 h-4', // 16px
    md: 'w-[18px] h-[18px]', // 18px
    lg: 'w-5 h-5', // 20px
    xl: 'w-6 h-6', // 24px
} as const;

export type IconSize = keyof typeof iconSize;
