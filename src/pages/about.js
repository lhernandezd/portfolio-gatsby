import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { TiDocumentText } from "react-icons/ti"
import CustomLink from "../components/customLink"

import Layout from "../components/layout"
import { SEO as Seo } from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "min-me.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1000)
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="About" />
      <section className="about">
        <div className="about__container">
          <header>
            <h2>About</h2>
          </header>
          <div className="container__info">
            <div className="info__description">
              <p>
                My love for technology started since I was a child. I studied
                electronics engineering at Universidad del Norte in
                Barranquilla, Colombia. I also finished a Bootcamp on Web
                Development made by Make It Real. The bootcamp helped me to
                acknowledge that this is my path.
              </p>
              <p>
                Now I am an Software Developer with 4 years of experience
                developing web applications and streaming channels (Roku) using
                Javascript, BrightScript, and REST services. Focused on working
                from the client-side, interpreting and adapting languages to
                create and maintain the final experience for the client. Strong
                understanding of component design patterns and data store for
                any UI layer using redux. I consider myself an enthusiast of
                technology and the challenges to continue growing
                professionally. I aim to create and design solutions with a team
                with clear objectives. An amateur photographer and animal lover.
              </p>
            </div>
            <div className="info__grid grid">
              <div className="col-6 grid__element">
                <p className="element__description">
                  You can know more about me in the following links:
                </p>
                <ul className="element__list">
                  <li className="list__item">
                    <CustomLink
                      link="https://github.com/lhernandezd"
                      title="lhernandezd"
                      icon={FaGithub}
                      shape="circular"
                      linkAttrs={{
                        target: "_blank",
                      }}
                    />
                  </li>
                  <li className="list__item">
                    <CustomLink
                      link="mailto:ldhdv95@gmail.com"
                      title="ldhdv95@gmail.com"
                      icon={IoMdMail}
                      shape="square"
                    />
                  </li>
                  <li className="list__item">
                    <CustomLink
                      link="https://www.linkedin.com/in/luis-david-hernandez/"
                      title="Luis Hernandez"
                      icon={FaLinkedinIn}
                      shape="square"
                      linkAttrs={{
                        target: "_blank",
                      }}
                    />
                  </li>
                  <li className="list__item">
                    <CustomLink
                      withLinkIcon
                      icon={TiDocumentText}
                      link="https://drive.google.com/file/d/1dv6fefGW30CgaOlzgenDMQvmkROAbTqL/view?usp=sharing"
                      title="Link to my resume"
                      shape="square"
                      linkAttrs={{
                        target: "_blank",
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div
                className="col-6 grid__element"
                style={{
                  maxWidth: `500px`,
                }}
              >
                <GatsbyImage
                  image={data.profileImage.childImageSharp.gatsbyImageData}
                  style={{ borderRadius: 2 }}
                  alt="Profile picture"
                  className="element__image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
