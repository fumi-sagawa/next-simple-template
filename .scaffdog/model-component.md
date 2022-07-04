---
name: "model-component"
root: "src/components"
output: "**/*"
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`
```typescript
export * from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`
```typescript
import styles from './{{ inputs.name | pascal }}.module.scss'
import {use{{ inputs.name | pascal }}} from "./use{{ inputs.name | pascal }}"

export const {{ inputs.name | pascal }} = () => {
  const {} = use{{ inputs.name | pascal }}()
  return <></>
}
```


# `{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  return {}
}

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

export const Index: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    //以下にインタラクションを記述
    // userEvent.click(canvas.getByRole('button'))
  },
}
export const Variation: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
}


```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './{{ inputs.name | pascal }}.stories'

const { Index } = composeStories(stories)

describe('{{ inputs.name | pascal }}', () => {
  it('期待される結果を記述', async () => {
    const { container } = render(<Index />)
    await Index.play({ canvasElement: container })
    //以下にテストターゲートと期待される結果を記述
    // const target = screen.getByRole("textbox") as HTMLInputElement;
    // expect(target.value).toEqual("Hello world!");
  })
})

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```