import React from "react"
import { navigate } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import StandardButton from "../components/standard-button"

const Sidebar = ({ location }) => {

  // const rootPath = `${__PATH_PREFIX__}/`
  // TODO: detect if you're on the prefix in button
  return (
    <div style={ styles.sidebarStyle }>
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
  sidebarStyle: {
    display: `flex`,
    width: '25%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
}