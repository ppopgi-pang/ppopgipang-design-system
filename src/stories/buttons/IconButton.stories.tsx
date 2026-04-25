import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import IconButton from '../../components/button/IconButton';

const SearchIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const CloseIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const MenuIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const meta = {
    title: 'Components/Buttons/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: false,
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: '아이콘 버튼 크기',
        },
        disabled: {
            control: 'boolean',
            description: '버튼 클릭 가능 여부',
        },
        onClick: { action: 'clicked' },
    },
    args: {
        icon: <SearchIcon />,
        size: 'xl',
        onClick: fn(),
        disabled: false,
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <IconButton size="xs" icon={<SearchIcon />} onClick={() => {}} />
            <IconButton size="sm" icon={<SearchIcon />} onClick={() => {}} />
            <IconButton size="md" icon={<SearchIcon />} onClick={() => {}} />
            <IconButton size="lg" icon={<SearchIcon />} onClick={() => {}} />
            <IconButton size="xl" icon={<SearchIcon />} onClick={() => {}} />
        </div>
    ),
};

export const WithDifferentIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <IconButton size="xl" icon={<SearchIcon />} onClick={() => {}} />
            <IconButton size="xl" icon={<CloseIcon />} onClick={() => {}} />
            <IconButton size="xl" icon={<MenuIcon />} onClick={() => {}} />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
