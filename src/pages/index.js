import React, { useState } from "react"
import { useTrail, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const items = [
  "Hi I'm Luis.",
  "Frontend (mostly) developer, specialize in fast prototypes",
  "for the web.",
]
const config = { mass: 5, tension: 1000, friction: 250 }

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
      <section className="home">
        <div className="home__container">
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
        <div className="home__skills">
          <div className="skills__skill size-3">
            <span>git</span>
          </div>
          <div className="skills__skill">
            <span>HTML</span>
          </div>
          <div className="skills__skill size-2">
            <span>SASS</span>
          </div>
          <div className="skills__skill size-2">
            <span>Javascript</span>
          </div>
          <div className="skills__skill size-3">
            <span>React.js</span>
          </div>
          <div className="skills__skill size-3">
            <span>Gatsby</span>
          </div>
          <div className="skills__skill">
            <span>Node.JS</span>
          </div>
          <div className="skills__skill size-2">
            <span>Python</span>
          </div>
          <div className="skills__skill">
            <span>Ruby On Rails</span>
          </div>
          <div className="skills__skill size-3">
            <span>Material UI</span>
          </div>
          <div className="skills__skill size-2">
            <span>Adobe XD</span>
          </div>
          <div className="skills__skill size-3">
            <span>mongoDB</span>
          </div>
          <div className="skills__skill">
            <span>Redux</span>
          </div>
          <div className="skills__skill size-2">
            <span>postgreSQL</span>
          </div>
          <div className="skills__skill">
            <span>jQuery</span>
          </div>
          <div className="skills__skill size-3">
            <span>Express.js</span>
          </div>
          <div className="skills__skill size-2">
            <span>Firebase</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
