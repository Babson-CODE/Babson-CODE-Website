import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class LoginFormValueHandler extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { password, email } = this.state

    this.setState({ submittedPassword: password, submittedEmail: email })
  }

  render() {
    const { email, password, submittedPassword, submittedEmail } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
         
            <Form.Input
            icon="user"
            iconPosition="left"
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
                type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />

            <Form.Button content='Login' />
     
        </Form>
        {/* 
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ password, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedPassword, submittedEmail }, null, 2)}</pre>
       */}
      </div>
    )
  }
}


const LoginSignUpForm = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <LoginFormValueHandler></LoginFormValueHandler>

{/*         <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
         */}
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default LoginSignUpForm