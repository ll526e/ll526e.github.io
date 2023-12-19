import { webLightTheme, webDarkTheme, Theme } from '@fluentui/react-components'
interface CustomTheme {
  light: Theme
  dark: Theme
}

export const customTheme: CustomTheme = {
  light: webLightTheme,
  dark: webDarkTheme
}