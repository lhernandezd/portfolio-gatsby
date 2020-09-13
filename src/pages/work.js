import React from "react"

import Layout from "../components/layout"
import Card from "../components/workCard";
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Working" />
      <section className="work">
        <div className="work__container">
          <header>
            <h2>My Work</h2>
          </header>
          <div className="work__info" style={{ marginBottom: "1.8em" }}>
            Here you are gonna find some of the work I have been making throught the years. To view more about my personal projects go to my
            {` `}
            <a
              target="_blank"
              href="https://github.com/lhernandezd"
              rel="noopener noreferrer"
              style={{ color: "#ED8074", fontWeight: 500 }}
            >
              github.
            </a>
          </div>
          <div className="grid work__cards">
            <Card
              containerClass="col-6"
              title="FullStack Labs"
              dateString="September 2019 - Present"
              project={{
                title: "EKA-TMS App",
                link: "https://go-eka.com/"
              }}
              description="Working as a Software Engineer for client projects, as well as company-owned projects."
              list={{
                title: "Current Project",
                items: [
                  "Used technologies including NodeJS, React, HTML, and CSS",
                  "Web app for transportation and logistics industry (EKA)",
                  "Provide support to EKA QA team",
                  "Design and Implement new features for EKA website app"
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="Ela Sustentable"
              dateString="December 2018 – July 2019"
              project={{
                title: "ELA Sustentable",
                link: "https://www.elasustentable.com/"
              }}
              description="Working as Fullstack developing a web application for industrial engineering company."
              list={{
                title: "Last Project",
                items: [
                  "Used technologies including Firebase, React, HTML, and CSS",
                  "Created web applications using the latest ECMAScript features",
                  "In charge of maintaining the firebase (database and cloud functions)",
                  "Web scraping with Python to process customer support emails",
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="SimpleLegal"
              dateString="July 2019 – September 2019"
              description="Working as Fullstack developing a desktop legal process web application."
              list={{
                title: "Last Project",
                items: [
                  "Used technologies including Firebase, React, HTML, and CSS",
                  "Responsible for maintaining the SimpleLegal application",
                  "Participated in improving the UI/UX behavior of the application"
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="Color Beats"
              dateString="July 2019 – September 2019"
              project={{
                title: "Color Beats",
                link: "https://colorbeats.co/"
              }}
              description="Working as Web developer for an eCommerce webpage using Shopify."
              list={{
                title: "Last Project",
                items: [
                  "Used technologies including JavaScript, Ruby on Rails, HTML, and CSS",
                  "Participated in improving the UI/UX behavior of the webpage",
                  "Responsible for maintaining the Color Beats webpage",
                ]
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
