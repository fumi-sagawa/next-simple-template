import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback = (props: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  )
}

type LayoutErrorBoundaryProps = {
  children: ReactNode
}

export const LayoutErrorBoundary = (props: LayoutErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {props.children}
    </ErrorBoundary>
  )
}
