import React, { Component } from 'react';
import MailChimpForm from './MailChimpForm';

class MailChimpUI extends Component {
    render() {
        return (
            <div>
                <h2 style={{ marginBottom: "10px", marginLeft: "20px"}}>{this.props.headline}</h2>
                <MailChimpForm/>
            </div>
        );
    }
}

export default MailChimpUI;