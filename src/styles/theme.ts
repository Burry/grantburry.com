import { DefaultTheme } from 'styled-components'

import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

const systemFontStack = `${inter.style.fontFamily} -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF0000',
    secondary: '#FF3300',
    tertiary: '#F50',
    white: 'rgba(255, 255, 255, 0.95)',
    black: '#212529'
  },
  fontFamilies: {
    base: systemFontStack,
    variable: systemFontStack
  },
  angles: {
    diagonal: '-5deg'
  }
}
