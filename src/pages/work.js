import React from "react"

import Layout from "../components/layout"
import Card from "../components/workCard"
import { SEO as Seo } from "../components/seo"

const Work = () => {
  return (
    <Layout>
      <Seo title="Working" />
      <section className="work">
        <div className="work__container">
          <header>
            <h2>My Work</h2>
          </header>
          <div className="work__info" style={{ marginBottom: "1.8em" }}>
            Here you are gonna find some of the work I have been making throught
            the years. To view more about my personal projects go to my
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
              title="Critical Mass"
              dateString="October 2022 - Present"
              company={{
                name: "Critical Mass",
                link: "https://www.criticalmass.com/",
              }}
              description="I work as Senior Frontend Developer for client projects as well as for in-house projects."
              list={{
                title: "Current Project",
                items: [
                  "Create a component library using Lit, to be used in internal applications.",
                  "Create and migrate applications using React, SCSS and the internal component library, with focus on performance.",
                  "Lead a developer team and choose the most suitable technologies for internal application projects.",
                  "Write and update documentation for the web component library and React apps.",
                ],
              }}
            />
            <Card
              containerClass="col-6"
              title="Zemoga"
              dateString="January 2021 - October 2022"
              company={{
                name: "Zemoga",
                link: "https://zemoga.com/",
              }}
              description="I work as Frontend Developer / Roku for client projects as well as for in-house projects."
              list={{
                title: "Last Project",
                items: [
                  "Implement deep linking and instant resume logic to enrich the user experience on the Roku channel.",
                  "Update the NodeJS server used for a custom build, to optimize the build time for the Roku channel.",
                  "Write and update the documentation for the channel maintenance.",
                ],
              }}
            />
            <Card
              containerClass="col-6"
              title="FullStack Labs"
              dateString="September 2019 - January 2021"
              company={{
                name: "FullStack Labs",
                link: "https://www.fullstacklabs.co/",
              }}
              description="Worked as a Software Engineer for client projects, as well as company-owned projects."
              list={{
                title: "Last Project",
                items: [
                  "Implemented Lambda functions to greatly reduce the number of requests made by the customer (data processing).",
                  "Added logic in charge of payment and transport chains, with real-time tracking, in order to enrich the user experience.",
                  "Upgrade the webpack version used in the project in order to reduce at least 20% of the build time.",
                ],
              }}
            />
            <Card
              containerClass="col-6"
              title="Color Beats"
              dateString="July 2019 – September 2019"
              company={{
                name: "Color Beats",
                link: "https://colorbeats.co/",
              }}
              description="Worked as Web developer for an eCommerce webpage using Shopify."
              list={{
                title: "Last Project",
                items: [
                  "Participated in improving the UI/UX behavior and maintaining the webpage",
                  "Used technologies including JavaScript, Ruby on Rails, HTML, and CSS",
                ],
              }}
            />
            <Card
              containerClass="col-6"
              title="SimpleLegal"
              dateString="July 2019 – September 2019"
              company={{
                name: "SimpleLegal",
                link: "https://simplelegalapp.co",
              }}
              description="Worked as Fullstack developing a desktop legal process application."
              list={{
                title: "Last Project",
                items: [
                  "Developed desktop legal process web application to help modernize the legal operations industry",
                  "Participated in improving the UI/UX behavior of the application",
                  "Used technologies including Firebase, Cloud Functions, React, HTML, and CSS",
                ],
              }}
            />
            <Card
              containerClass="col-6"
              title="Ela Sustentable"
              dateString="December 2018 – July 2019"
              company={{
                name: "ELA Sustentable",
                link: "https://www.elasustentable.com/",
              }}
              description="Worked as Fullstack developing a web application for industrial engineering company."
              list={{
                title: "Last Project",
                items: [
                  "Developed company management web application for industrial engineering companies",
                  "Created web applications using the latest ECMAScript features",
                  "Used technologies including Firebase, Cloud Functions, Python, React, HTML, and CSS",
                ],
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Work
