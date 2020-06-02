import React from 'react'
import addToMailchimp from "gatsby-plugin-mailchimp"
import Color from "../constants/color"

class EmailListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    addToMailchimp(this.state.email).then(data => {
      console.log(data)
      this.setState({email: ""})
      alert(`${data.result}: ${data.message}`)
    })
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Get an email when I publish a new essay:</h3>
        <div style={{display: `flex`, flexDirection: `column`}}>
          <input
            placeholder="Enter your email..."
            name="email"
            type="email"
            onChange={this.handleEmailChange}
          />
          <button
            type="submit"
            style={{color: Color.ERDarkBlue}}
          >
            Subscribe
          </button>
        </div>
      </form>
    )
  }
}

export default EmailListForm