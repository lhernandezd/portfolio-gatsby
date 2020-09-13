import React from "react"

import Layout from "../components/layout"
import Card from "../components/educationCard";
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Education" />
      <section className="education">
        <div className="education__container">
          <header>
            <h2>Education</h2>
          </header>
          <div className="grid education__cards">
            <Card
              containerClass="col-6"
              title="Make It Real Bootcamp"
              dateString="Aug 2019"
              description="Fullstack Bootcamp (JavaScript Orientated)."
              education={{
                title: "Make it Real",
                link: "https://makeitreal.camp/full-stack-online"
              }}
            />
            <Card
              containerClass="col-6"
              title="Make It Real Bootcamp"
              dateString="Aug 2018"
              description="Fullstack Bootcamp (Ruby Orientated)."
              education={{
                title: "Make it Real",
                link: "https://makeitreal.camp/full-stack-online"
              }}
            />
            <Card
              containerClass="col-6"
              title="Electrical Engineering"
              dateString="Sept 2017"
              description="BS in Electrical Engineering at Universidad del Norte."
              education={{
                title: "Universidad Del Norte",
                link: "https://www.uninorte.edu.co/web/ingenieria-electronica"
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
