import { FC } from 'react'

export type HeaderProps = {
  title?: string
}

export const Header: FC<HeaderProps> = ({ title = 'Header' }) => {
  return (
    <div>
      <h1 className='text-4xl font-bold underline'>{title}</h1>
    </div>
  )
}
