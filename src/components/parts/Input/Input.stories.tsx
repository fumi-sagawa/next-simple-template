import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

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

export const InputInteraction: ComponentStoryObj<typeof Input> = {
  args: { onChange: action('入力') },
  parameters: {
    docs: {
      description: {
        component: `入力のインタラクション確認`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // 以下にインタラクションを記述
    userEvent.type(canvas.getByRole('textbox'), 'Hello world!')
  },
}
