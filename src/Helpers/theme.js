export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontFamily: {
    link: 'Source Sans Pro',
    Text: 'Caveat ',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    mm: 20,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    deleteButton: 'brown',
    navLink: 'whitesmoke',

    hoverBtn: 'black',
    text: 'wheat',
    spanText: 'white',
    linkText: 'white',
    header: 'linear-gradient(180deg,rgba(18, 18, 18, 0)0.01%,#02030B 99.53%)',
  },
  radii: {
    none: '0',
    normal: '15px',
    round: '50%',
  },
  borders: {
    none: 'none',
    input: '2px solid brown ',
  },
  shadows: {
    boxShadow: '0px 0px 2px 1px wheat',
    buttonsShadow:
      '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
    textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
  },
});
