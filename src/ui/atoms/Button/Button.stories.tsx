import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success'],
      description: 'The visual style of the button',
      control: { type: 'radio' }
    },
    onClick: { action: 'On button click' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
    textColor: 'white'
  }
}
