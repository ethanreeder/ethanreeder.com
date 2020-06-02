import React from "react"
// import { Link, navigate } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import Color from "../constants/color"

class StandardButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseOver: false
    }
  }

  toggleHover = () => {
    this.setState({mouseOver: !this.state.mouseOver})
  }

  render() {
    return(
      <div
        // TODO: change this to take in colors from props
        style={{
          cursor: `pointer`,
          backgroundColor: this.state.mouseOver ? Color.ERDarkBlue : 'white',
          border: `1px solid grey`,
          paddingLeft: 8,
          paddingRight: 8,
          margin: 5,
          boxShadow: "1px 3px 1px #9E9E9E"
        }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.props.onClick}
      >
        <text
          style={{
            fontSize: 16,
            color: this.state.mouseOver ? 'white' : Color.ERBlack
          }}
        >
          {this.props.text}
        </text>
      </div>
    )
  }


}

export default StandardButton
