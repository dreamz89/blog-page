import { Outlet } from "react-router-dom"
import { ConfigProvider, Layout } from "antd"

import Navigation from "components/Navigation"
import AntTheme from "styles/ant-theme"
import CombinedThemeProvider from "styles/combined-theme"
import { GlobalStyle, Container } from "styles/global"

function App() {
  return (
    <ConfigProvider theme={AntTheme}>
      <CombinedThemeProvider>
        <GlobalStyle />
        <Layout>
          <Navigation />
          <Layout.Content>
            <Container>
              <Outlet />
            </Container>
          </Layout.Content>
        </Layout>
      </CombinedThemeProvider>
    </ConfigProvider>
  )
}

export default App
