import React from "react"
import { graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Prose from "../constants/prose"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import CopyToClipboardText from "../components/copy-to-clipboard-text"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <h1 style={{marginTop: rhythm(1),}}>Say Hello.</h1>
      <br/>
      <text>{Prose.ContactDescription}</text>
      <text></text>
      <br/>
      <br/>
      <text>{`If you're interested in the stuff I write or think about, we should be better friends.`}</text>
      <br/>
      <br/>
      <text>{`Send me a note at \xa0`}</text>
      <CopyToClipboardText minWidth={`225px`} text={"hi.ethan.reeder@gmail.com"}/>
      <text>{`\xa0 — coffee's on me.`}</text>
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
