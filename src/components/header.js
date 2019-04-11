import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  /* Any valid css represented as a string */

  /* Prop example */
  background: ${({ type }) => (type === "becca" ? "rebeccapurple" : "orange")};

  div {
    h1 {
      a {
        color: white;
        &:hover {
          color: red;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader type="becca">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
