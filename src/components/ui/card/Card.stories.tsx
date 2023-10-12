import { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card/Card.tsx'
import { Typography } from '@/components/ui/typography/Typography.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCard: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
  },
}
