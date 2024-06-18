import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.antd.paddingMD}px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
`
