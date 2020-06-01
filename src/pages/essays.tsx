// Gatsby supports TypeScript natively!
// @ts-ignore
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Color from "../constants/color"

import Bio from "../components/bio"
import SEO from "../components/seo"

import Layout from "../layouts/layout"
import Sidebar from "../layouts/sidebar"
import EssayPreview from "../components/essay-preview"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          type: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const EssayIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resonance essay project" />
      <h1>Essays</h1>
      <h3>I call this essay project resonance because it sounds nice</h3>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 style={{ marginBottom: rhythm(1/8), textDecoration: 'none' }}>
                <Link style={{ boxShadow: `none`, textDecoration: 'none', color: Color.ERBlack }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <text style={styles.dateTextStyle}>{node.frontmatter.date}</text>
            </header>
            {/*<text style={styles.descriptionTextStyle}>{node.frontmatter.description}</text>*/}
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default EssayIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {type: {eq: "essay"}}, fields: {}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
          }
        }
      }
    }
  }
`

const styles = {
  dateTextStyle: {
    fontSize: 12,
    color: Color.ERMidGray,
    // fontFamily:
  },
  descriptionTextStyle: {
    fontSize: 12,
    color: Color.ERMidGray,
    // fontFamily:
  }
}