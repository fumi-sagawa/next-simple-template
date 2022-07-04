import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Documents } from './Documents'

export default {
  component: Documents,
} as ComponentMeta<typeof Documents>

export const Index: ComponentStoryObj<typeof Documents> = {
  parameters: {
    docs: {
      description: {
        component: `ドキュメントリスト`,
      },
    },
  },
}
