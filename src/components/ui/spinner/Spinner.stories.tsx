import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    className: 'size-3',
  },
};

export const Large: Story = {
  args: {
    className: 'size-8',
  },
};

export const Primary: Story = {
  args: {
    className: 'text-primary',
  },
};
