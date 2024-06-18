import { theme } from "antd"

const { getDesignToken } = theme
const globalToken = getDesignToken()

type Size = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

const size: Size = {
  xs: globalToken.screenXS, // 480px
  sm: globalToken.screenSM, // 576px
  md: globalToken.screenMD, // 768px
  lg: globalToken.screenLG, // 992px
  xl: globalToken.screenXL, // 1200px
  xxl: globalToken.screenXXL, // 1600px
}

export const device = {
  xs: `(min-width: ${size.xs}px)`,
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
  xxl: `(min-width: ${size.xxl}px)`,
}
