import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <div className="grid info__links">
        <div className="col-3 links__link">
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
        <div className="col-3 links__link">
          <a href="mailto:ldhdv95@gmail.com" rel="noopener noreferrer">
            <IoMdMail className="link-square" />
            {` `}
            ldhdv95@gmail.com
          </a>
        </div>
        <div className="col-3 links__link">
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
        <div className="col-3 links__link">
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
      </div>
    </section>
  </Layout>
)

export default Contact
