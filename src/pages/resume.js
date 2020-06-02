import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import ExperienceItem from "../components/experience-item"
import ResumeHeader from "../components/resume-header"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resume" />
      <div style={{}}>
        <ResumeHeader text={"About"}/>
        <text>I am excited about the intersection of deep technical expertise, product, and user psychology and empathy.</text>
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <ResumeHeader text={"Education"}/>
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <ResumeHeader text={"EXPERIENCE"}/>
      </div>
      <ExperienceItem
        jobTitle={"Product Manager"}
        organization={"Sakneen (YC W20)"}
        url={"https://sakneen.herokuapp.com/auth/login"}
        bullets={["bank"]}
      />
      <ExperienceItem
        jobTitle={"CEO & Founder"}
        organization={"Snowball"}
        url={"https://www.meetsnowball.com/"}
        bullets={["bank"]}
      />
      <ExperienceItem
        jobTitle={"Investment Banking Analyst Intern"}
        organization={"Centerview Partners"}
        url={"https://www.centerviewpartners.com/"}
        bullets={["bank"]}
      />
      <ExperienceItem
        jobTitle={"Corporate Strategy Intern"}
        organization={"bluebird bio"}
        url={"https://www.bluebirdbio.com/"}
        bullets={["hi", "i'm", "ethan"]}
      />
      <div style={{display: "flex", flexDirection: "row"}}>
        <h1>Skills</h1>
        <hr/>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const styles = {
  resumeSectionHeaderStyle: {
    fontFamily: "Work Sans",
    fontSize: 16,

  }
}