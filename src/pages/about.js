import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "min-me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <section className="about">
        <div className="grid about__container">
          <div className="col-6 container__info">
            <header>
              <h2>About</h2>
            </header>
            <p>
              My love for technology started since I was a child.
              <br />I studied electronics engineering at Universidad del Norte
              in Barranquilla, Colombia. I also finished a Bootcamp on Web
              Development made by Make It Real. The bootcamp helped me to
              acknowledge that this is my path.
            </p>
            <p>
              Now I am an electronic engineer graduate looking to break into the
              world of Web Development and who is constantly looking for ways to
              develop himself personally and professionally.
            </p>
          </div>
          <div
            className="col-6"
            style={{
              maxWidth: `500px`,
            }}
          >
            <Img
              fluid={data.profileImage.childImageSharp.fluid}
              style={{ borderRadius: 2 }}
              alt="Profile picture"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
