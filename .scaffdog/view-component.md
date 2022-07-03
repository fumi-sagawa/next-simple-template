---
name: "view-component"
root: "src/components"
output: "**/*"
ignore: []
questions:
  name: "Please enter a view component name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import styles from './{{ inputs.name | pascal }}.module.scss'

export const {{ inputs.name | pascal }} = () => {
  return <></>
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

export const Index: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: { text: 'テキスト' },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
export const Variation: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: { text: 'テキスト' },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```