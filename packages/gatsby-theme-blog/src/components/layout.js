import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import Footer from "./home-footer"

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        py: 4,
      })}
    >
      {children}
    </div>
    <Footer />
  </Styled.root>
)
