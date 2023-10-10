import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './Tab.tsx'

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const TabPrimary: Story = {
  args: {
    variant: 'primary',
    children: 'Switcher',
    disabled: false,
  },
}
export const TabSecondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Switcher',
    disabled: false,
  },
}
export const TabTertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Switcher',
    disabled: false,
  },
}
export const TabTertiaryDisable: Story = {
  args: {
    variant: 'tertiary',
    children: 'Switcher',
    disabled: true,
  },
}
