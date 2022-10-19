import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Input } from './Input'

export default {
  component: Input,
} as ComponentMeta<typeof Input>

export const Index: ComponentStoryObj<typeof Input> = {
  args: { onChange: action('入力') },
  parameters: {
    docs: {
      description: {
        component: `インプットコンポーネント`,
      },
    },
  },
}
