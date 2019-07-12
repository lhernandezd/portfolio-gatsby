/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import useTheme from "../hooks/useTheme"
import { useSpring, animated } from "react-spring"
import "../scss/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { theme, toggleTheme } = useTheme()
  const props = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  })
  return (
    <div className={`app ${theme}`}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggle={toggleTheme}
        theme={theme}
      />
      <div
        id="content"
        className="container"
        style={{
          padding: `0px 1.0875rem`,
          paddingTop: 0,
        }}
      >
        <main className="main">
          <animated.div style={props}>{children}</animated.div>
        </main>
      </div>
      <footer>
        <div className="footer__info">
          <div className="container footer__info-container">
            © {new Date().getFullYear()} - Web app designed and coded by
            {` `}
            <a
              id="gradient"
              target="_blank"
              href="https://github.com/lhernandezd"
              rel="noopener noreferrer"
            >
              <span>Luis Hernández</span>
            </a>
            {` `}
            using
            {` `}
            <a
              id="gradient"
              target="_blank"
              href="https://www.gatsbyjs.org"
              rel="noopener noreferrer"
            >
              Gatsby.
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
