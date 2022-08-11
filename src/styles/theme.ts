import { DefaultTheme } from 'styled-components'

const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF0000',
    secondary: '#FF3300',
    tertiary: '#F50',
    white: 'rgba(255, 255, 255, 0.95)',
    black: '#212529'
  },
  fontFamilies: {
    base: `Inter, ${systemFontStack}`,
    variable: `InterVariable, ${systemFontStack}`
  },
  angles: {
    diagonal: '-5deg'
  }
}
