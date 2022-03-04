import React, { Component } from 'react';
import MailChimpForm from './MailChimpForm';

class MailChimpUI extends Component {
    render() {
        return (
            <div>
                <h4 style={{ marginBottom: "15px", }}>{this.props.headline}</h4>
                <MailChimpForm/>
            </div>
        );
    }
}

export default MailChimpUI;