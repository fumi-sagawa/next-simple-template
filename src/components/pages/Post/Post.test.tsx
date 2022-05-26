import { render, screen } from '@testing-library/react'

// import userEvent from '@testing-library/user-event'
import { Post } from './Post'

describe('Post page test', () => {
  test('rendering test', () => {
    render(<Post />)
    expect(screen.getByRole('link')).toBeTruthy()
  })
})
