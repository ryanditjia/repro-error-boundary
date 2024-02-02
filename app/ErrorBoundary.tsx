'use client'

import { Component } from 'react'

type ErrorBoundaryProps = {
  children?: React.ReactNode
  fallback: React.ReactNode
}

type ErrorBoundaryState = {
  didCatch: boolean
}

const initialState = {
  didCatch: false,
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { didCatch: true }
  }

  render() {
    const { didCatch } = this.state
    const { children, fallback } = this.props

    let childToRender = children
    if (didCatch) childToRender = fallback

    // this doesn’t work, the error would bubble up to Next.js error.tsx
    // return childToRender;

    // neither does this
    // return <>{childToRender}</>;

    // but this works, why?
    return <div>{childToRender}</div>
  }
}
