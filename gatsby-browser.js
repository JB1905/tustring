import "prismjs/themes/prism.css"

import React from "react"
import { ThemeProvider } from "./src/context"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
