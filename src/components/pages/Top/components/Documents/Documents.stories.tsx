import type { ComponentMeta, Story } from '@storybook/react'

import { Documents } from './Documents'

export default {
  title: 'Documents',
  component: Documents,
} as ComponentMeta<typeof Documents>

export const basic: Story = () => <Documents></Documents>
