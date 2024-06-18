import { Outlet } from "react-router-dom"
import { ConfigProvider, Layout } from "antd"
import AntTheme from "./styles/ant-theme"
import CombinedThemeProvider from "./styles/combined-theme"
const { Content } = Layout

function App() {
  return (
    <ConfigProvider theme={AntTheme}>
      <CombinedThemeProvider>
        <Layout>
          <Content>
      <Outlet />
          </Content>
        </Layout>
      </CombinedThemeProvider>
    </ConfigProvider>
  )
}

export default App
