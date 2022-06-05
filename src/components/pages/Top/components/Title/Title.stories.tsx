import type { ComponentMeta, Story } from '@storybook/react'

import { Title } from './Title'

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

export const basic: Story = () => <Title></Title>
