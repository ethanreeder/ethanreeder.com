const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // TODO: add blog post query as well
  const essayTemplate = path.resolve(`./src/templates/essay-template.js`)
  const projectTemplate = path.resolve(`./src/templates/project-template.js`)
  // const blogPostTemplate = 1

  const essayQueryResult = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {type: {eq: "essay"}}, fields: {}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              description
              title
              type
            }
          }
        }
      }
    }
  `)

  const projectQueryResult = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {type: {eq: "project"}}, fields: {}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              description
              title
              type
            }
          }
        }
      }
    }
  `)

  // const projectQueryResult = 3

  if (essayQueryResult.errors) {
    throw essayQueryResult.errors
  }
  if (projectQueryResult.errors) {
    throw projectQueryResult.errors
  }

  // Create essays posts pages.
  const essays = essayQueryResult.data.allMarkdownRemark.edges
  const projects = projectQueryResult.data.allMarkdownRemark.edges

  // For each post retrieved, create a page
  essays.forEach((essay, index) => {
    const previous = index === essays.length - 1 ? null : essays[index + 1].node
    const next = index === 0 ? null : essays[index - 1].node

    createPage({
      path: essay.node.fields.slug,
      component: essayTemplate,
      context: {
        slug: essay.node.fields.slug,
        previous,
        next,
      },
    })
  })

  projects.forEach((project, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node

    createPage({
      path: project.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
      },
    })
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