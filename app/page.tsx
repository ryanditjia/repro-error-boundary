import { ErrorBoundary } from './ErrorBoundary'

const ThisThrows = () => {
  throw new Error('This component always throws an error')
}

export default function Home() {
  return (
    <ErrorBoundary fallback={<div>ErrorBoundary fallback</div>}>
      <ThisThrows />
    </ErrorBoundary>
  )
}
