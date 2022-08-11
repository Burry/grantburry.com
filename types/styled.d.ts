import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      white: string
      black: string
    }
    fontFamilies: {
      base: string
      variable: string
    }
    angles: {
      diagonal: string
    }
  }
}
