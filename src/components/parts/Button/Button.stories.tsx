import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  args: { text: 'サンプルボタン', handleClick: action('ボタン押下') },
} as ComponentMeta<typeof Button>

export const basic: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>
