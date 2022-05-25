import React from "react"

import Layout from "../components/layout"
import Card from "../components/workCard";
import SEO from "../components/seo"

const Teaching = () => {
  return (
    <Layout>
      <SEO title="Teaching" />
      <section className="work">
        <div className="work__container">
          <header>
            <h2>Teaching</h2>
          </header>
          <div className="grid work__cards">
            <Card
              containerClass="col-6"
              title="Make it Real"
              dateString="November 2021 - May 2022"
              company={{
                name: "Make it real",
                link: "https://makeitreal.camp/"
              }}
              description="Bootcamp from Make it Real as mentor for the Full Stack Web Developer program"
              list={{
                title: "Courses",
                items: [
                  "Full Stack Web Developer (Command line tools, git, Github, JavaScript, Node JS, jQuery and React)"
                ]
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Teaching
