import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import ExperienceItem from "../components/experience-item"
import ResumeHeader from "../components/resume-header"
import Steps from "../components/steps"
import Prose from "../constants/prose"
import VertStep from "../components/vertstep"

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resume" />
      <div style={{display: `flex`, flexDirection: `row`}}>
        <div>
          <VertStep/>
        </div>
      {/*  <div style={{display: `flex`, flexDirection: `column`}}>*/}
      {/*    <ResumeHeader text={"About"}/>*/}
      {/*    <text>I am excited about the intersection of deep technical expertise, product, and user psychology and empathy.</text>*/}
      {/*  </div>*/}
      {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
      {/*    <ResumeHeader text={"EXPERIENCE"}/>*/}
      {/*  </div>*/}
      {/*  <ExperienceItem*/}
      {/*    jobTitle={"Product Manager"}*/}
      {/*    organization={"Sakneen (YC W20)"}*/}
      {/*    url={"https://sakneen.com"}*/}
      {/*    bullets={Prose.SakneenBullets}*/}
      {/*  />*/}
      {/*  <ExperienceItem*/}
      {/*    jobTitle={"CEO & Founder"}*/}
      {/*    organization={"Snowball"}*/}
      {/*    url={"https://www.meetsnowball.com/"}*/}
      {/*    bullets={Prose.SnowballBullets}*/}
      {/*  />*/}
      {/*  <ExperienceItem*/}
      {/*    jobTitle={"IB Analyst Intern"}*/}
      {/*    organization={"Centerview Partners"}*/}
      {/*    url={"https://www.centerviewpartners.com/"}*/}
      {/*    bullets={Prose.CenterviewBullets}*/}
      {/*  />*/}
      {/*  <ExperienceItem*/}
      {/*    jobTitle={"Corporate Strategy Intern"}*/}
      {/*    organization={"bluebird bio"}*/}
      {/*    url={"https://www.bluebirdbio.com/"}*/}
      {/*    bullets={Prose.bluebirdBullets}*/}
      {/*  />*/}
      {/*  <ExperienceItem*/}
      {/*    jobTitle={"Associate Consultant"}*/}
      {/*    organization={"IMPACT Coalition | BCHD"}*/}
      {/*    url={"https://health.baltimorecity.gov/"}*/}
      {/*    bullets={Prose.IMPACTBullets}*/}
      {/*  />*/}
      {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
      {/*    <ResumeHeader text={"Education"}/>*/}
      {/*  </div>*/}
      {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
      {/*    <h1>Skills</h1>*/}
      {/*    <hr/>*/}
      {/*  </div>*/}
      </div>
    </Layout>
  )
}

export default Resume

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