import React from "react"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const ProjectPreviewCard = ({ slug }) => {
    return (
    <div class="project-preview-card">
        <Link to={`/${slug}/`}>
            <div>
                <h3>
                    project title
                </h3>
                <GatsbyImage>

                </GatsbyImage>
            </div>
        </Link>
    </div>
    )
}

// export const query = graphql`
//     query {
//
//     }
// `