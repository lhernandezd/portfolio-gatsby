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
              title="Zemoga"
              dateString="January 2021 - Present"
              company={{
                name: "Zemoga",
                link: "https://zemoga.com/"
              }}
              description="Working as a Software Engineer for client projects, as well as company-owned projects."
              list={{
                title: "Current Project",
                items: [
                  "Usage of Roku Pay and Deep Linking",
                  "Design and Implement new features",
                  "Used technologies including Node JS, BrightScript and SceneGraph"
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="FullStack Labs"
              dateString="September 2019 - January 2021"
              company={{
                name: "FullStack Labs",
                link: "https://www.fullstacklabs.co/"
              }}
              description="Working as a Software Engineer for client projects, as well as company-owned projects."
              list={{
                title: "Current Project",
                items: [
                  "Usage of S3 and Lambda functions",
                  "Design and Implement new features of the website app",
                  "Used technologies including React, Vanilla JS, Express JS, Nest JS, PostgreSQL, Jest JS, HTML, and CSS",
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="Color Beats"
              dateString="July 2019 – September 2019"
              company={{
                name: "Color Beats",
                link: "https://colorbeats.co/"
              }}
              description="Working as Web developer for an eCommerce webpage using Shopify."
              list={{
                title: "Last Project",
                items: [
                  "Participated in improving the UI/UX behavior and maintaining the webpage",
                  "Used technologies including JavaScript, Ruby on Rails, HTML, and CSS",
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
                  "Developed desktop legal process web application to help modernize the legal operations industry",
                  "Participated in improving the UI/UX behavior of the application",
                  "Used technologies including Firebase, Cloud Functions, React, HTML, and CSS"
                ]
              }}
            />
            <Card
              containerClass="col-6"
              title="Ela Sustentable"
              dateString="December 2018 – July 2019"
              company={{
                name: "ELA Sustentable",
                link: "https://www.elasustentable.com/"
              }}
              description="Working as Fullstack developing a web application for industrial engineering company."
              list={{
                title: "Last Project",
                items: [
                  "Developed company management web application for industrial engineering companies",
                  "Created web applications using the latest ECMAScript features",
                  "Used technologies including Firebase, Cloud Functions, Python, React, HTML, and CSS",
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
