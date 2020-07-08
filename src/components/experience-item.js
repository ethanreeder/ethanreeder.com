import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"

class ExperienceItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  renderListItems = (ar) => {
    const listItems = ar.map((str) =>
      <li style={styles.bulletStyle}>
        <text style={styles.bulletTextStyle}>
          {str}
        </text>
      </li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }

  render() {
    return(
      <div style={{display: `flex`, flexDirection: `row`}}>
        <div style={{display: `flex`, flexDirection: `column`, minWidth: rhythm(10)}}>
          <h3 style={{marginBottom: rhythm(1/8)}}>{this.props.jobTitle}</h3>
          <a
            style={styles.linkStyle}
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.organization}
          </a>
        </div>
        <div style={{display: `flex`, flexDirection: `column`}}>
          {this.renderListItems(this.props.bullets)}
        </div>
      </div>
    )
  }


}

export default ExperienceItem

const styles = {
  bulletStyle: {
    marginBottom: 0,
    marginLeft: rhythm(1),
  },
  bulletTextStyle: {
    fontSize: 14,
  },
  linkStyle: {
    textDecoration: 'none',
    color: Color.ERLinkBlue,
    fontSize: 15
  },
}