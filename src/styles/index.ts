/**
 * Base styles and variables
 */
import { DefaultTheme } from '@react-navigation/native';

/**
 * Map of color names to HEX values
 */
export const colors = {
  primary: '#2CB9B0',
  secondary: '#0C0D34',
  success: '#00D99A',
  danger: '#FF0058',
  warning: '#FFC641',
  info: '#50B9DE',
  light: '#F6F6F6',
  black: '#000',
  muted: '#0c0d3480',
  white: '#fff'
};

/**
 * Map of reusable fonts
 */
export const fontStyles = {
  // [Fonts.Bold]: require('assets/fonts/SF-Pro-Display-Bold.otf'),
  // [Fonts.Light]: require('assets/fonts/SF-Pro-Display-Light.otf'),
  // [Fonts.Medium]: require('assets/fonts/SF-Pro-Display-Medium.otf'),
  // [Fonts.Regilar]: require('assets/fonts/SF-Pro-Display-Regular.otf')
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...colors,
    background: '#0C0D34',
    card: '#50B9DE',
    text: '#000',
    border: '#0c0d3480',
    notification: '#fff'
  }
};