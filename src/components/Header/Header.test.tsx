import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should render a heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
