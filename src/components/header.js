import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState , useEffect} from "react"

import Drawer from "./drawer"
import { useSpring, animated } from "react-spring"
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import { IoIosMenu, IoIosClose } from "react-icons/io"

const Header = ({ siteTitle, ...props }) => {
  const [open, setOpen] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  })
  const { o, t,} = useSpring({
    config: { 
      mass: 1,
      tension: 270,
      friction: 30
    },
    o: open ? 1 : 0,
    t: open ? 0 : 100,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  const pages= ["about", "work", "education"];

  return (
    <header className="header">
      <nav className="container--extended header__content">
        <div className="content__title">
          <span className="icon content__icon" onClick={() => setOpen(!open)}>
            {!open ? <IoIosMenu /> : <IoIosClose />}
          </span>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="content__links">
          {pages.map(page =>
            <Link className="link" to={`/${page}/`}>
              {`${page[0].toUpperCase()}${page.slice(1)}`}
            </Link>
          )}
          <span className="link link-last icon" onClick={props.toggle} style={{ display: 'none' }}>
            {props.theme === "light" ? <FaRegMoon /> : <FaRegSun />}
          </span>
        </div>
      </nav>
      {dimensions.width <= 576 &&
        <>
          <animated.aside
            id="drawer"
            className="header__drawer"
            style={{
              opacity: o,
              transform: t.interpolate(t => `translateX(${-t}%)`),
            }}
          >
            <Drawer toggle={props.toggle} setOpen={setOpen} pages={pages}/>
          </animated.aside>
        </>
      }
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
