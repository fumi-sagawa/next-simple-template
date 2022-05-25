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
  return null
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { ComponentMeta, Story } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

export const basic : Story = () => <{{ inputs.name | pascal }}></{{ inputs.name | pascal }}>

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```