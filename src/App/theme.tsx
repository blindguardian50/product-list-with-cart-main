import {extendTheme} from "@chakra-ui/react"

const baseFontSize = 1
const baseSpaceUnit = 1

const space = {
  px: '1px',
  0.5: `${0.125 * baseSpaceUnit}rem`,
  1: `${0.25 * baseSpaceUnit}rem`,
  1.5: `${0.375 * baseSpaceUnit}rem`,
  2: `${0.5 * baseSpaceUnit}rem`,
  2.5: `${0.625 * baseSpaceUnit}rem`,
  3: `${0.75 * baseSpaceUnit}rem`,
  3.5: `${0.875 * baseSpaceUnit}rem`,
  4: `${baseSpaceUnit}rem`,
  5: `${1.25 * baseSpaceUnit}rem`,
  6: `${1.5 * baseSpaceUnit}rem`,
  7: `${1.75 * baseSpaceUnit}rem`,
  8: `${2 * baseSpaceUnit}rem`,
  9: `${2.25 * baseSpaceUnit}rem`,
  10: `${2.5 * baseSpaceUnit}rem`,
  12: `${3 * baseSpaceUnit}rem`,
  14: `${3.5 * baseSpaceUnit}rem`,
  16: `${4 * baseSpaceUnit}rem`,
  20: `${5 * baseSpaceUnit}rem`,
  24: `${6 * baseSpaceUnit}rem`,
  28: `${7 * baseSpaceUnit}rem`,
  32: `${8 * baseSpaceUnit}rem`,
  36: `${9 * baseSpaceUnit}rem`,
  40: `${10 * baseSpaceUnit}rem`,
  44: `${11 * baseSpaceUnit}rem`,
  48: `${12 * baseSpaceUnit}rem`,
  52: `${13 * baseSpaceUnit}rem`,
  56: `${14 * baseSpaceUnit}rem`,
  60: `${15 * baseSpaceUnit}rem`,
  64: `${16 * baseSpaceUnit}rem`,
  72: `${18 * baseSpaceUnit}rem`,
  80: `${20 * baseSpaceUnit}rem`,
  96: `${24 * baseSpaceUnit}rem`,
}

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  // styles: {
  //   global: {
  //     // body: {
  //     //   fontFamily: `'RedHat', sans-serif`, // Set your custom font family
  //     //   // bg: ''
  //     // },
  //   },
  // },

  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  colors: {
    surface: {
      0: "#070707",
      100: "#121212",
      200: "#282828",
      300: "#3f3f3f",
      400: "#575757",
      500: "#717171",
      600: "#8b8b8b"
    },
    primary: {
      0: "#c63b0e",
      50: "#FEF4F1",
      100: "#FDE5DE",
      200: "#FAC8B8",
      300: "#F7A78D",
      400: "#F2744A",
      'standard-500': "#C63B0E",
      600: "#B0350C",
      700: "#9D300B",
      800: "#812709",
      900: "#5B1B06",
      950: "#471605"
    },
    secondary: {
      50: '#faf6f3'
    }
  },
  fontSizes: {
    xs: `${0.75 * baseFontSize}rem`,
    sm: `${0.875 * baseFontSize}rem`,
    md: `${baseFontSize}rem`,
    lg: `${1.125 * baseFontSize}rem`,
    xl: `${1.25 * baseFontSize}rem`,
    "2xl": `${1.5 * baseFontSize}rem`,
    "3xl": `${1.875 * baseFontSize}rem`,
    "4xl": `${2.25 * baseFontSize}rem`,
    "5xl": `${3 * baseFontSize}rem`,
    "6xl": `${3.75 * baseFontSize}rem`,
    "7xl": `${4.5 * baseFontSize}rem`,
    "8xl": `${6 * baseFontSize}rem`,
    "9xl": `${8 * baseFontSize}rem`
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space,
  sizes: {
    ...space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  borderRadius: {
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  config: {
    cssVarPrefix: 'ck',
  }
})
