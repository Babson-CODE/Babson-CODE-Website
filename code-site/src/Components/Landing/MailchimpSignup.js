import React, { Component } from "react";
import MailchimpReact from "../Mailchimp/MailChimpForm";

class MailchimpSignup extends Component {
  render() {
    console.log(this.props.tagline)
    const test = this.props.tagline
    console.log(test)
    return (
      <MailchimpReact
        tagline={test}
        tag="abc"
        action="https://babsoncode.us19.list-manage.com/subscribe/post?u=3d116a6f505eae239db9472b2&id=d5a1276109"
      />
    );
  }
}

export default MailchimpSignup;
