import React from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"

class EmailListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
    }
  }

  handleSubmit = () => {
    // addToMailchimp(this.state.email)
    alert(`you did it: ${this.state.email}`)
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Get an email when I publish a new essay:</h2>
        <div style={{display: `flex`, flexDirection: `column`}}>
          <input
            placeholder="Enter your email..."
            name="email"
            type="text"
            onChange={this.handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    )
  }
};

export default EmailListForm;