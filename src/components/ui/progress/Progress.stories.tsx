import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: 'w-64',
  },
};

export const HalfWay: Story = {
  args: {
    value: 50,
    className: 'w-64',
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: 'w-64',
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: 'w-64',
  },
};
