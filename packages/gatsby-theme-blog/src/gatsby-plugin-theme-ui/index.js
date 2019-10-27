import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default {
  initialColorMode: `light`,
  colors,
  fonts: {
    body: `system, sans-serif`,
    heading: `'Noto Serif SC', sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.25,
  },
  letterSpacings: {
    body: '-0.02em',
  },
  sizes: {
    container: 720,
  },
  styles,
  prism,
}