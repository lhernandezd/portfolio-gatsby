import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Drawer from "./drawer"
import { useSpring, animated } from "react-spring"
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import { IoIosMenu, IoIosClose } from "react-icons/io"

const Header = ({ siteTitle, ...props }) => {
  const [open, setOpen] = useState(false)
  const { o, h, m } = useSpring({
    o: open ? 1 : 0,
    h: open ? 100 : 0,
    m: open ? 0 : 100,
  })
  return (
    <header className="header">
      <nav className="container header__content">
        <h1 style={{ margin: 0, fontSize: 20 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="content__links">
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
            {props.theme === "light" ? <FaRegMoon /> : <FaRegSun />}
          </span>
        </div>
        <span className="icon content__icon" onClick={() => setOpen(!open)}>
          {!open ? <IoIosMenu /> : <IoIosClose />}
        </span>
      </nav>
      <nav className="header__drawer" style={{ zIndex: open ? 1 : 0 }}>
        <animated.div
          id="drawer"
          style={{
            opacity: o,
            height: h.interpolate(h => `${h}%`),
            width: h.interpolate(h => `${h}%`),
            marginLeft: m.interpolate(m => `-${m}px`),
          }}
        >
          <Drawer toggle={props.toggle} />
        </animated.div>
      </nav>
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
