import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaLinkedinIn, FaTwitter, FaFilePdf } from "react-icons/fa"

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
            <div className="info__links">
              <div className="links__link">
                <a
                  target="_blank"
                  href="https://github.com/lhernandezd"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="link-circular" />
                  {` `}
                  lhernandezd
                </a>
              </div>
              <div className="links__link">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lhernandezd95/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="link-square" />
                  {` `}
                  lhernandezd95
                </a>
              </div>
              <div className="links__link">
                <a
                  target="_blank"
                  href="https://twitter.com/ldhdv1195"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="link-square" />
                  {` `}
                  @ldhdv1195
                </a>
              </div>
              <div className="links__link">
                <a
                  target="_blank"
                  href="https://twitter.com/ldhdv1195"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf className="link-square" />
                  {` `}
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              maxWidth: `500px`,
              margin: "auto 0",
            }}
          >
            <Img
              fluid={data.profileImage.childImageSharp.fluid}
              style={{ borderRadius: 4 }}
              alt="Profile picture"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
