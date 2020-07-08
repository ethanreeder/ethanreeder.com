import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"
import Circle from "./circle"
import Prose from "../constants/prose"

class Steps extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return(
      <div style={{display: `flex`, flexDirection: `column`,}}>
        <Circle size={50} open={true} color={'black'}/>
        <div style={{display: `flex`, marginLeft: 25, marginRight: 25, flexDirection: `row`, minHeight: 10}}>
          <div style={{border: `1px solid black`}}></div>
          <text>{Prose.LoremIpsum}</text>
        </div>
        <Circle size={50} open={false} color={'black'}/>
      </div>
    )
  }


}

export default Steps

const styles = {
  circleStyle: {
  },
}