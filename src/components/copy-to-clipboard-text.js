import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
// import {IoMdCopy} from "react-icons/all"
import {IoMdCopy} from "react-icons/io"

class CopyToClipboardText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      copied: false,
    }
  }

  handleOnCopy() {
    this.setState({copied: true})
    setTimeout(() => this.setState({copied: false}), 2000)
  }

  render() {
    return (
      <span>
        <CopyToClipboard text={this.props.text}
                         onCopy={() => this.handleOnCopy()}>
          <button style={{minWidth: this.props.minWidth ? this.props.minWidth : ``}}>
            <text style={{fontSize: this.props.fontSize}}>
              {this.state.copied ? `copied to clipboard!` : this.props.text}
            </text>
          </button>
        </CopyToClipboard>
      </span>
    );
  }
}

export default CopyToClipboardText

const styles = {
  confirmationNoticeStyle: {
    bottom: '1.45rem',
    left: '50%',
    paddingBottom: '2px',
    paddingTop: '2px',
    transform: 'translate(-50%, 0)',
    position: 'absolute',
  }
}