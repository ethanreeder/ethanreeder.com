import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"

class ResumeHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div style={styles.headerStyle}>
        <h2 style={styles.headerTextStyle}>{this.props.text}</h2>
        <hr/>
      </div>
    )
  }


}

export default ResumeHeader

const styles = {
  headerStyle: {
    // display: "flex",
    // flexDirection: "row",

  },
  headerTextStyle: {
    marginBottom: 0,
  }
}