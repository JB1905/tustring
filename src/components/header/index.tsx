import React, { useContext } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Link } from 'gatsby'

import { ThemeContext } from '../../context'

import { HeaderWrapper, HeaderContent, HeaderTitle } from './header.styles'

interface Props {
  readonly location: Location
  readonly title: string
}

const Header = ({ location, title }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle as={location.pathname === rootPath ? 'h1' : 'h3'}>
          <Link to={`/`}>{title}</Link>
        </HeaderTitle>

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
