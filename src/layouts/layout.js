import React from "react"

import { rhythm } from "../utils/typography"
// import { scale } from "../utils/typography"
import Color from "../constants/color"

import Sidebar from "./sidebar"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // let header
  //
  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }

  return (
    <div style={{ display: `flex`, flexDirection: `row`, minHeight: `100%` }}>
      <div style={{ display: `flex`, minWidth: '25%', justifyContent: 'flex-end', minHeight: `100%` }}>
        <div style={{ marginTop: rhythm(1), position: `fixed`, }}>
          <Sidebar location={location}/>
        </div>
        <div style={{ display: `flex`, width: `2%`, height: `100%`, backgroundColor: Color.ERDarkBlue, marginRight: rhythm(.25) }}/>
        <div style={{ display: `flex`, width: `1%`, height: `100%`, backgroundColor: Color.EROrange, marginRight: rhythm(1) }}/>
        {/*<div style={{ display: `flex`, width: `4%`, height: `100%`, backgroundColor: Color.ERBlack, marginRight: rhythm(.25) }}/>*/}
        {/*<div style={{ display: `flex`, width: `2%`, height: `100%`, backgroundColor: Color.ERBlack, marginRight: rhythm(.25) }}/>*/}
        {/*<div style={{ display: `flex`, width: `1%`, height: `100%`, backgroundColor: Color.ERBlack, marginRight: rhythm(1) }}/>*/}
      </div>


      <div style={{ maxWidth: rhythm(32), padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
        {/*<header>{header}</header>*/}
        <main>{children}</main>
        <footer style={styles.footerStyle}>© Ethan Reeder (2019 - {new Date().getFullYear()}).  All rights reserved.</footer>
      </div>
    </div>
  )
}

export default Layout

const styles = {
  footerStyle: {
    marginTop: rhythm(4),
    // bottom: 0,
  }
}