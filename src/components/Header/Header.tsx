export type HeaderProps = {
  title?: string
}

export const Header = ({ title = 'Header' }: HeaderProps) => {
  return (
    <div>
      <h1 className='text-4xl font-bold underline'>{title}</h1>
    </div>
  )
}
