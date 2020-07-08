import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"

class StepComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return(
      <div style={{
        display:"inline-block",
        border: `2px solid ${this.props.color}`,
        borderColor: this.props.color,
        backgroundColor: this.props.open ? this.props.color : this.props.backgroundColor,
        borderRadius: `50%`,
        width: 25,
        height: 25,
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      }}>
      </div>
    )
  }


}

export default StepComponent