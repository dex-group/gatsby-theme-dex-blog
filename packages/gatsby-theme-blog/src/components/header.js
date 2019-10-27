/** @jsx jsx */
import { Link } from "gatsby"
import ColorMode from './ColorMode'
import { css, jsx, Styled } from "theme-ui"


const Title = ({ children }) => (
  <Styled.h1
    css={css({
      my: 0,
      fontSize: 4,
    })}
  >
    <Styled.a
      as={Link}
      css={{
        color: `inherit`,
        boxShadow: `none`,
      }}
      to={`/`}
    >
      {children}
    </Styled.a>
  </Styled.h1>
)

export default ({ children, title, ...props }) => {
  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`,
            mb: 6,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <ColorMode />
        </div>
        {/* {props.location.pathname === rootPath && <Bio />} */}
      </div>
    </header>
  )
}
