import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input.tsx'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      // control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputPrimary: Story = {
  args: {
    variant: 'primary',
    placeholderValue: 'Input',
    disabled: true,
  },
}

export const InputSecondary: Story = {
  args: {
    variant: 'secondary',
    placeholderValue: 'Input',
    disabled: false,
  },
}
export const InputTertiary: Story = {
  args: {
    variant: 'tertiary',
    placeholderValue: 'Input search',
    disabled: false,
  },
}
