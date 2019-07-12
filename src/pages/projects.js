import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "ela-sustentable.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "todo-list.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project4: file(relativePath: { eq: "makeitgram.png" }) {
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
      <SEO title="Projects" />
      <section className="projects">
        <div className="projects__container">
          <header>
            <h2>Projects</h2>
          </header>
          <div className="projects__info" style={{ marginBottom: "1.8em" }}>
            Here you are gonna find some of my personal projects and recent
            works I have been working. To view more projects go to my
            {` `}
            <a
              target="_blank"
              href="https://github.com/lhernandezd"
              rel="noopener noreferrer"
              style={{ color: "#db0768", fontWeight: 500 }}
            >
              github.
            </a>
          </div>
          <div className="grid projects__cards">
            <div className="col-6 cards__card">
              <Img
                fluid={data.project1.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
                alt="Profile picture"
              />
              <a
                target="_blank"
                href="https://www.elasustentable.com/"
                rel="noopener noreferrer"
                className="card__placeholder"
                style={{ display: "block", borderRadius: 2 }}
              >
                <div className="card__info">
                  <h3>Ela Sustentable</h3>
                  <p>
                    Web application developed with React.js and Django, for the
                    management of the company.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 cards__card">
              <Img
                fluid={data.project2.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
                alt="Profile picture"
              />
              <a
                target="_blank"
                href="https://lhernandezd.github.io/"
                rel="noopener noreferrer"
                className="card__placeholder"
                style={{ display: "block", borderRadius: 2 }}
              >
                <div className="card__info">
                  <h3>Portfolio v2</h3>
                  <p>
                    Single wep page application which includes my personal
                    information and some projects.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 cards__card">
              <Img
                fluid={data.project3.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
                alt="Profile picture"
              />
              <a
                target="_blank"
                href="https://lhernandezd-todo.herokuapp.com/"
                rel="noopener noreferrer"
                className="card__placeholder"
                style={{ borderRadius: 2 }}
              >
                <div className="card__info">
                  <h3>Todo Stack MERN</h3>
                  <p>
                    Full Stack project made with React, Node.js, mongoDB and
                    Express. This application consist in a task manager for your
                    frecuent objectives.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 cards__card">
              <Img
                fluid={data.project4.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
                alt="Profile picture"
              />
              <a
                target="_blank"
                href="https://github.com/lhernandezd/makeitgram"
                rel="noopener noreferrer"
                className="card__placeholder"
                style={{ display: "block", borderRadius: 2 }}
              >
                <div className="card__info">
                  <h3>Makeitgram</h3>
                  <p>Instagram clone made with RoR (Ruby on Rails)</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
