---
name: "hooks"
root: "src/hooks"
output: "."
ignore: []
questions:
  name: "Please enter a hooks name."
---


# `use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  return {}
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

  it('テストケースと期待される結果を記述', () => {
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