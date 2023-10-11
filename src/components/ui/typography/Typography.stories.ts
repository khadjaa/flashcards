import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const LargeTypography: Story = {
  args: {
    variant: 'large',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const H1Typography: Story = {
  args: {
    variant: 'h1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const H2Typography: Story = {
  args: {
    variant: 'h2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const H3Typography: Story = {
  args: {
    variant: 'h3',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Body1Typography: Story = {
  args: {
    variant: 'body1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Subtitle1Typography: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Body2Typography: Story = {
  args: {
    variant: 'body2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Subtitle2Typography: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const CaptionTypography: Story = {
  args: {
    variant: 'caption',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const OverlineTypography: Story = {
  args: {
    variant: 'overline',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Link1Typography: Story = {
  args: {
    variant: 'link1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
export const Link2Typography: Story = {
  args: {
    variant: 'link2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
  },
}
