import React from "react"
import { Link, graphql} from "gatsby"

import { rhythm, scale } from "../utils/typography"

const ProjectTemplate = ({ data, pageContext, location }) => {
  // const project = data.markdownRemark
  // siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title='asdf'
        description='asdf'
      />
      <div>
        <header>
          <h1>
            project title
          </h1>
        </header>
      </div>
      <footer>
        THIS IS A FOOTER: in the future add copyright and email linky
      </footer>
    </Layout>
  )
}

export default ProjectTemplate

// export const