import React, { useState } from "react"
import { Link } from "gatsby"
import { useTrail, animated } from "react-spring"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const items = [
  "Hi I'm Luis.",
  "Frontend (mostly) developer, specialize in fast prototypes",
  "for the web.",
]
const config = { mass: 8, tension: 1000, friction: 250 }

const IndexPage = () => {
  const [toggle] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div className="main">
        <div className="main__container">
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              id={index === 0 ? "gradient" : ""}
              className={index === 0 ? "container__text" : "container__subtext"}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={height}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
      <div
        style={{ display: "none", maxWidth: `300px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
