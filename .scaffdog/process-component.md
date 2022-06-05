---
name: "process-component"
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
import {use{{ inputs.name | pascal }}} from "./use{{ inputs.name | pascal }}"

type {{ inputs.name | pascal }}Props = {

}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  const {} = use{{ inputs.name | pascal }}()
  return <{{ inputs.name | pascal }}View/>
}

type {{ inputs.name | pascal }}ViewProps = {
  
}

export const {{ inputs.name | pascal }}View = (props: {{ inputs.name | pascal }}ViewProps) => {
  return null
}
```


# `{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  return null
}

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { {{ inputs.name | pascal }}View } from './{{ inputs.name | pascal }}'

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }}View,
  args: { onClick: action('') },
} as ComponentMeta<typeof {{ inputs.name | pascal }}View>

export const basic : ComponentStory<typeof  {{ inputs.name | pascal }}View> = (args) => <{{ inputs.name | pascal }}View {...args}></{{ inputs.name | pascal }}View>

```

# `{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.test.tsx`

```typescript
import { cleanup, renderHook } from '@testing-library/react-hooks'

import { use{{ inputs.name | pascal }} } from './use{{ inputs.name | pascal }}'

describe('use{{ inputs.name | pascal }}のテスト', () => {
  beforeEach(() => {
    cleanup()
  })

  it('use{{ inputs.name | pascal }}の機能テスト', () => {
    const { result } = renderHook(() => {
      return use{{ inputs.name | pascal }}()
    })
    // expect().toBe()
  })
})

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```