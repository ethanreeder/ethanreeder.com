const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// export const wrapPageElement = ({}) => {
//   return (<div></div>)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const essay_template = path.resolve(`./src/templates/essay-template.js`)
  // const project = path.resolve(`./src/templates/project-template.js`)

  // const blogPostQueryResult = 1

  // TODO: MIGHT HAVE TO WRITE TWO QUERIES
  const essayQueryResult = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  )

  // const projectQueryResult = 3

  if (essayQueryResult.errors) {
    throw essayQueryResult.errors
  }

  // Create essays posts pages.
  const essays = essayQueryResult.data.allMarkdownRemark.edges

  // For each post retrieved, create a page
  essays.forEach((essay, index) => {
    const previous = index === essays.length - 1 ? null : essays[index + 1].node
    const next = index === 0 ? null : essays[index - 1].node

    if (essay.node.frontmatter.type === "essay") {
      createPage({
        path: essay.node.fields.slug,
        component: essay_template,
        context: {
          slug: essay.node.fields.slug,
          previous,
          next,
        },
      })
    }

    // else if (post.node.frontmatter.type === "project") {
    //   createPage({
    //     path: post.node.fields.slug,
    //     component: project,
    //     context: {
    //       slug: post.node.fields.slug,
    //       previous,
    //       next,
    //     },
    //   })
    // }

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
