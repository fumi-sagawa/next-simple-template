import { addDecorator } from '@storybook/react'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'
import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} placeholder={undefined} unoptimized />,
})

addDecorator((Story) => (
  <MemoryRouterProvider>
    <Story />
  </MemoryRouterProvider>
))
