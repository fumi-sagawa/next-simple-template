---
name: "parts"
root: "src/components/parts"
output: "."
ignore: []
questions:
  name: "Please enter a component name."
  hasHooks:
    confirm: "Is it have hooks? (Default false)"
    initial: false
---

# `{{ inputs.name | pascal }}/index.ts`
```typescript
export * from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`
```typescript
import {use{{ inputs.name | pascal }}} from "./use{{ inputs.name | pascal }}"
import styles from './{{ inputs.name | pascal }}.module.scss'

type {{ inputs.name | pascal }}Props = {

}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  {{ if inputs.hasHooks }}const {} = use{{ inputs.name | pascal }}(){{ end }}
  return <></>
}

```


# `{{ !inputs.hasHooks && '!' }}{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  return {}
}
```



# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`
```typescript
import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
export const Story: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
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


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```