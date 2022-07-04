import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ListItem } from './ListItem'

export default {
  component: ListItem,
} as ComponentMeta<typeof ListItem>

export const Index: ComponentStoryObj<typeof ListItem> = {
  args: { text: 'サンプルタイトル', link: '/' },
  parameters: {
    docs: {
      description: {
        component: `ドキュメントリストの子アイテム`,
      },
    },
  },
}
