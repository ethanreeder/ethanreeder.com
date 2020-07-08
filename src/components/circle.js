import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"

class Circle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return(
      <div style={{
        padding: 0,
        margin: 0,
        display:"inline-block",
        border: `2px solid ${this.props.color}`,
        borderColor: this.props.color,
        backgroundColor: this.props.open ? this.props.color : this.props.backgroundColor,
        borderRadius: this.props.size/2,
        width: this.props.size,
        height: this.props.size,
      }}>
      </div>
    )
  }


}

export default Circle