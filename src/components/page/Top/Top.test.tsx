import { render, screen } from '@testing-library/react'

// import userEvent from '@testing-library/user-event'
import { Top } from './Top'

describe('Top page test', () => {
  test('rendering test', () => {
    render(<Top />)
    expect(screen.getByText('test text')).toBeTruthy()
  })
})
