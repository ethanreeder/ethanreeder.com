import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Sidebar = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div style={{ display: `flex`, width: '25%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div style={styles.sidebarItemStyle}>
        <Link to={"/"} style={styles.sidebarLinkStyle}>
          <text style={styles.sidebarTextStyle}>Home</text>
        </Link>
      </div>
      <div style={styles.sidebarItemStyle}>
        <Link to={"/essays"} style={styles.sidebarLinkStyle}>
          <text style={styles.sidebarTextStyle}>Essays</text>
        </Link>
      </div>
      <div style={styles.sidebarItemStyle}>
        <Link to={"/projects"} style={styles.sidebarLinkStyle}>
          <text style={styles.sidebarTextStyle}>Projects</text>
        </Link>
      </div>
      <div style={styles.sidebarItemStyle}>
        <Link to={"/resume"} style={styles.sidebarLinkStyle}>
          <text style={styles.sidebarTextStyle}>Resume</text>
        </Link>
      </div>
      <div style={styles.sidebarItemStyle}>
        <Link to={"/contact"} style={styles.sidebarLinkStyle}>
          <text style={styles.sidebarTextStyle}>Contact</text>
        </Link>
      </div>
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