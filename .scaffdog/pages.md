---
name: "pages"
root: "src/components/pages"
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

export const {{ inputs.name | pascal }} = () => {
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

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
```


