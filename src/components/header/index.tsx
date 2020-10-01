import React, { useContext } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Link } from 'gatsby'

import { ThemeContext } from '../../context'

import { HeaderWrapper, HeaderContent, Title } from './header.styles'

interface Props {
  // TODO
  readonly location: Location
  readonly title: string
}

const Header = ({ location, title }: Props) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/` // TODO

  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title as={location.pathname === rootPath ? 'h1' : 'h3'}>
          <Link to={`/`}>{title}</Link>
        </Title>

        <DarkModeToggle
          onChange={(isDark: boolean) => setTheme(isDark ? 'dark' : 'light')}
          checked={theme === 'dark'}
          size={60}
        />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
