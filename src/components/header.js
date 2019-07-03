import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaRegMoon, FaRegSun } from "react-icons/fa"

const Header = ({ siteTitle, ...props }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 style={{ margin: 0, fontSize: 20 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="content__links">
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/projects">
            Contact
          </Link>
          <span className="link link--last" onClick={props.toogle}>
            {props.theme === "light" ? <FaRegMoon /> : <FaRegSun />}
          </span>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
