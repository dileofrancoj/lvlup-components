import type { Meta, StoryObj } from '@storybook/react'

import { Stepper } from './'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onStepperChange: { action: 'stepper change' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    max: 10
  }
}
