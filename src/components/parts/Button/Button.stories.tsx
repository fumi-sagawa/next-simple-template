import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from './Button'

export default {
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {
  args: { text: 'サンプルボタン', handleClick: action('ボタン押下') },
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
}
export const Another: ComponentStoryObj<typeof Button> = {
  args: { text: 'サンプルボタン', handleClick: action('ボタン押下') },
  parameters: {
    docs: {
      description: {
        story: 'Some story **markdown**',
      },
    },
  },
}
