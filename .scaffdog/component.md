---
name: "component"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name."
---

# `{{ inputs.name | pascal }}.tsx`

```typescript
type {{ inputs.name | pascal -}}ViewProps = {
} & {{ inputs.name | pascal -}}Props

const {{ inputs.name | pascal -}}View = (props: {{ inputs.name | pascal -}}ViewProps) => {
  return null
}

type {{ inputs.name | pascal -}}Props = {
}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal -}}Props) => {
  return <{{ inputs.name | pascal -}}View {...props} />
}
```
