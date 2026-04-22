import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../../components/button/Button';

const meta = {
    title: 'Components/Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'black'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'icon'],
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: { onClick: fn(), children: 'Button', loading: false, disabled: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { variant: 'primary' },
};

export const Secondary: Story = {
    args: { variant: 'secondary' },
};

export const Outline: Story = {
    args: { variant: 'outline' },
};

export const Ghost: Story = {
    args: { variant: 'ghost' },
};

export const Danger: Story = {
    args: { variant: 'danger' },
};

export const Black: Story = {
    args: { variant: 'black' },
};

export const XSmall: Story = {
    args: { size: 'xs' },
};

export const Small: Story = {
    args: { size: 'sm' },
};

export const Large: Story = {
    args: { size: 'lg' },
};

export const ExtraLarge: Story = {
    args: { size: 'xl' },
};

export const Loading: Story = {
    args: { loading: true },
};

export const Disabled: Story = {
    args: { disabled: true },
};
