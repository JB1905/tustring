const React = require("react")
const { ThemeProvider } = require("./src/context")

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
