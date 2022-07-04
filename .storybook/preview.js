import '../src/styles/global.scss'
import { initialize, mswDecorator } from 'msw-storybook-addon'

// Initialize MSW
initialize()

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator]
