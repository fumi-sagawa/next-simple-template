import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Title } from './Title'

export default {
  component: Title,
} as ComponentMeta<typeof Title>

export const Index: ComponentStoryObj<typeof Title> = {
  parameters: {
    docs: {
      description: {
        component: `ページタイトル`,
      },
    },
  },
}
