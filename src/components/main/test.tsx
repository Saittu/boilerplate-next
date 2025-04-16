import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Next Boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
