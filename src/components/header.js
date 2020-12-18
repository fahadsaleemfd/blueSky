import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navs from "../components/nav"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#b8d2ff`,
     
    }}
  >
    <Navs/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
