import React, { useContext } from "react"
import DarkModeToggle from "react-dark-mode-toggle"
import { Link } from "gatsby"

import { ThemeContext } from "../../context"

import { HeaderWrapper, HeaderContent, Title } from "./header.styles"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title as={location.pathname === rootPath ? "h1" : "h3"}>
          <Link to={`/`}>{title}</Link>
        </Title>

        <DarkModeToggle
          onChange={e => setTheme(e ? "dark" : "light")}
          checked={theme === "dark"}
          size={60}
        />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
