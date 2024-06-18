import { theme } from "antd"
import { ThemeProvider } from "styled-components"

const CombinedThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { token } = theme.useToken()

  return (
    <ThemeProvider theme={{ antd: token, base: { color: "mediumseagreen" } }}>
      {children}
    </ThemeProvider>
  )
}

export default CombinedThemeProvider
