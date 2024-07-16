import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Home } from './Home'

describe('Home', () => {
  it('should render hello world message', () => {
    render(<Home />);
    expect(screen.getByText(/hello, world/i)).toBeInTheDocument()
  })
})