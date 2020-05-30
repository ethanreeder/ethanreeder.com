import React from "react"
import { Link, navigate } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import StandardButton from "../components/standard-button"

const Sidebar = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div style={{ display: `flex`, width: '25%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
      <StandardButton onClick={() => navigate("/")} text={`Home`}></StandardButton>
      <StandardButton onClick={() => navigate("/essays")} text={`Essays`}></StandardButton>
      <StandardButton onClick={() => navigate("/projects")} text={`Projects`}></StandardButton>
      <StandardButton onClick={() => navigate("/resume")} text={`Resume`}></StandardButton>
      <StandardButton onClick={() => navigate("/contact")} text={`Contact`}></StandardButton>
    </div>
  )


}

export default Sidebar

const styles = {
  sidebarItemStyle: {
    border: `1px solid grey`,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 5,
    boxShadow: "1px 3px 1px #9E9E9E"
  },
  sidebarLinkStyle: {
    boxShadow: `none`
  },
  sidebarTextStyle: {
    fontSize: 20
    // fontFamily:
  }
}