import { render, screen } from '@testing-library/react'

import { Top } from './Top'

describe('Top page test', () => {
  test('rendering test', () => {
    render(<Top />)
    expect(screen.getByText('Next Simple Template')).toBeTruthy()
  })
})
