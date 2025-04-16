import { Meta, StoryFn } from '@storybook/react'
import { Header, HeaderProps } from '.'

export default {
  title: 'Components/Header',
  component: Header
} as Meta

export const Default: StoryFn<HeaderProps> = () => <Header />
