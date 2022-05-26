---
name: "hooks"
root: "src/hooks"
output: "**/*"
ignore: []
questions:
  name: "Please enter a hooks name."
---


# `use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  return null
}
```


# `__tests__/use{{ inputs.name | pascal }}.test.ts`

```typescript
import { cleanup, renderHook } from '@testing-library/react-hooks'

import { use{{ inputs.name | pascal }} } from '../use{{ inputs.name | pascal }}'

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

