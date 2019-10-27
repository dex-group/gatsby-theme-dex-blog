const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 0,
  mb: 4,
}

export default {
  root: {
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    letterSpacing: 'body',
  },
  h1: {
    ...heading,
    fontSize: [4, 5],
  },
  h2: {
    ...heading,
    fontSize: [3, 4],
  },
  h3: {
    ...heading,
    fontSize: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
  },
  h5: {
    ...heading,
    fontSize: 1,
  },
  h6: {
    ...heading,
    fontSize: 0,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    mb: 4,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 3,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  a: {
    color: 'heading',
    textDecoration: 'none',
    '&:hover': {
      color: 'secondary',
    }
  },
  ol: {
    margin: ['1em 0', '1.5em 0'],
  },
  ul: {
    margin: ['1em 0', '1.5em 0'],
  },
  section: {
    margin: ['1em 0', '1.5em 0'],
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  hr: {
    mt: 5,
    mb: 5,
    border: 0,
    borderBottom: '1px solid',
  },
  p: {
    fontSize: [2, 3],
    m: 0,
    mb: 4,
    code: {
      fontSize: `inherit`,
    },
    a: {
      color: 'text',
      background: 'linear-gradient(to right, hsla(0,0%,87%,0.4), hsla(0,0%,87%,0.9))',
      backgroundSize: '300% 40%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 100%',
      transition: 'background-position 300ms',
      '&:hover': {
        backgroundPosition: '100% 100%',
      }
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    margin: ['1em 0', '1.5em 0'],
    paddingLeft: '20px',
    borderLeft: '5px solid #968d8d',
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`,
    },
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    mb: 4,
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  },
}
