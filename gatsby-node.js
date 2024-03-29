const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // TODO: add blog post query as well if blog added
  // const blogPostTemplate = 1
  const essayTemplate = path.resolve(`./src/templates/essay-template.js`)
  const imprintTemplate = path.resolve(`./src/templates/imprint-template.js`)
  const projectTemplate = path.resolve(`./src/templates/project-template.js`)

  const essayQueryResult = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {type: {eq: "essay"}, published: {eq: true}}, fields: {}}
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

  const imprintQueryResult = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {type: {eq: "imprint"}, published: {eq: true}}, fields: {}}
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
        filter: {frontmatter: {type: {eq: "project"}, published: {eq: true}}, fields: {}}
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

  if (essayQueryResult.errors) {
    throw essayQueryResult.errors
  }
  if (imprintQueryResult.errors) {
    throw imprintQueryResult.errors
  }
  if (projectQueryResult.errors) {
    throw projectQueryResult.errors
  }

  // Create essays posts pages.
  const essays = essayQueryResult.data.allMarkdownRemark.edges
  const imprints = imprintQueryResult.data.allMarkdownRemark.edges
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

  imprints.forEach((imprint, index) => {
    const previous = index === imprints.length - 1 ? null : imprints[index + 1].node
    const next = index === 0 ? null : imprints[index - 1].node

    createPage({
      path: imprint.node.fields.slug,
      component: imprintTemplate,
      context: {
        slug: imprint.node.fields.slug,
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