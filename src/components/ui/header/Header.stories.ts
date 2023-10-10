import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: { type: 'boolean' },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
export const WithLogged: Story = {
  args: {
    isLoggedIn: true,
  },
}
export const WithoutLogged: Story = {
  args: {
    isLoggedIn: false,
  },
}
