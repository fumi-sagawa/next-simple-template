---
name: "features"
root: "src/components/features"
output: "."
ignore: []
questions:
  name: "Please enter a component name."
  hasProps:
    confirm: "Is it have props? (Default false)"
    initial: false
  hasStory:
    confirm: "Is it have story? (Default false)"
    initial: false
---

# `{{ inputs.name | pascal }}/index.ts`
```typescript
export * from './{{ inputs.name | pascal }}';
```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`
```typescript
import { use{{ inputs.name | pascal }} } from "./use{{ inputs.name | pascal }}"
import styles from './{{ inputs.name | pascal }}.module.scss'

{{ if inputs.hasProps }}
type {{ inputs.name | pascal }}Props = {

}
{{ end }}

export const {{ inputs.name | pascal }} = ({{ if inputs.hasProps }}props: {{ inputs.name | pascal }}Props{{ end }}) => {
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


# `{{ !inputs.hasStory && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

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


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.ts`

```typescript
import { cleanup, renderHook } from '@testing-library/react-hooks'

import { use{{ inputs.name | pascal }} } from '../use{{ inputs.name | pascal }}'

describe('use{{ inputs.name | pascal }}のテスト', () => {
  beforeEach(() => {
    cleanup()
  })

  it('テストする関数と期待される結果を記述', () => {
    const { result } = renderHook(() => {
      return use{{ inputs.name | pascal }}()
    })
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  })
})
```