import Typography from "typography"
import gray from "gray-percentage"
// import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

// usWebDesignStandardsTheme.overrideThemeStyles = () => ({
//   headerFontFamily: ["Roboto", "sans-serif"],
//   baseFontSize: "16px"
// })

// const typography = new Typography(usWebDesignStandardsTheme)

const typography = new Typography({
  title: "ethanreeder.com modified US Web Design Standards",
  baseFontSize: "17px",
  baseLineHeight: 1.4,
  scale: 2.5,
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["700"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Roboto",
      styles: ["400"]
    }
  ],
  // headerFontFamily: ["Merriweather", "sans-serif"],
  // headerFontFamily: ["Source Sans Pro", "serif"],
  headerFontFamily: ["Work Sans", "sans-serif"],
  // bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(5 / 5),
    h2: scale(3 / 5),
    h3: scale(1 / 5),
    h4: scale(0 / 5),
    h5: scale(-1 / 8),
    h6: {
      ...scale(-2 / 8),
      fontFamily: options.bodyFontFamily.join(","),
      fontWeight: options.bodyWeight,
      textTransform: "uppercase",
    },
    a: {
      color: "#0071bc",
    },
    "a:visited": {
      color: "#4c2c92",
    },
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid`,
      borderColor: gray(93),
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
