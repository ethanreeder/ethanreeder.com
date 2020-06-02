// Gatsby supports TypeScript natively!
// @ts-ignore
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Color from "../constants/color"
import Prose from "../constants/prose"

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
      <h1 style={{marginTop: rhythm(1),}}>Resonance Essay Project</h1>
      <br/>
      <text>{Prose.ResonanceDescription}</text>
      <br/>
      <br/>
      <br/>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <div style={{ marginBottom: rhythm(1/4)}}>
                <text style={styles.dateTextStyle}>{`${node.frontmatter.date}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`}</text>
                <Link style={{ boxShadow: `none`, color: Color.ERBlack }} to={node.fields.slug}>
                  {title}
                </Link>
              </div>
            </header>
            {/*<text style={styles.descriptionTextStyle}>{node.frontmatter.description}</text>*/}
            {/*<section>*/}
            {/*  <p*/}
            {/*    dangerouslySetInnerHTML={{*/}
            {/*      __html: node.frontmatter.description || node.excerpt,*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</section>*/}
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
            date(formatString: "YYYY.MM.DD")
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
    fontSize: 16,
    color: Color.ERMidGray,
    // fontFamily:
  },
  descriptionTextStyle: {
    fontSize: 12,
    color: Color.ERMidGray,
    // fontFamily:
  },
  titleTextStyle: {
    fontSize: 16,
    color: Color.ERBlack,

  }
}