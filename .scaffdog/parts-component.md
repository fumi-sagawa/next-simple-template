---
name: "parts-component"
root: "src/components"
output: "**/*"
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`
```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`
```typescript
import styles from './{{ inputs.name | pascal }}.module.scss'

type {{ inputs.name | pascal }}Props = {

}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  return null
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`
```typescript
import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  args: { onClick: action('') },
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

export const basic : ComponentStory<typeof  {{ inputs.name | pascal }}> = (args) => <{{ inputs.name | pascal }} {...args}></{{ inputs.name | pascal }}>

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`
```scss
```