import React, { Fragment } from "react"

import { Link } from "gatsby"
import { FaRegMoon } from "react-icons/fa"

const Drawer = props => {
  return (
    <Fragment>
      <div className="drawer__links">
        <Link className="link" to="/about/">
          About
        </Link>
        <Link className="link" to="/projects/">
          Projects
        </Link>
        <Link className="link" to="/contact/">
          Contact
        </Link>
        <span className="link link-last icon" onClick={props.toggle}>
          Change theme
          <FaRegMoon />
        </span>
      </div>
    </Fragment>
  )
}

export default Drawer
