import { Outlet } from "react-router-dom"
import { ConfigProvider, Layout } from "antd"
import AntTheme from "./styles/ant-theme"
import CombinedThemeProvider from "./styles/combined-theme"
import { GlobalStyle, Container } from "./styles/global"

const { Content } = Layout

function App() {
  return (
    <ConfigProvider theme={AntTheme}>
      <CombinedThemeProvider>
        <GlobalStyle />
        <Layout>
          <Content>
            <Container>
      <Outlet />
            </Container>
          </Content>
        </Layout>
      </CombinedThemeProvider>
    </ConfigProvider>
  )
}

export default App
