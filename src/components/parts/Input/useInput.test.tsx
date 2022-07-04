import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Input.stories'

const { InputInteraction } = composeStories(stories)

describe('Input', () => {
  it('期待される結果を記述', async () => {
    const { container } = render(<InputInteraction />)
    await InputInteraction.play({ canvasElement: container })
    //以下にテストターゲートと期待される結果を記述
    const target = screen.getByRole('textbox') as HTMLInputElement
    expect(target.value).toEqual('Hello world!')
  })
})
