/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import React, { Component } from "react"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from "semantic-ui-react"

const FixedNavMenu = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
        Babson CODE
      </Menu.Item>
      <Menu.Item as="a" position="right">
        Home
      </Menu.Item>
      <Menu.Item link><Link to='/about'> About Us</Link></Menu.Item>
      <Dropdown item simple text="Our Community">
        <Dropdown.Menu>
          <Dropdown.Item>Residents</Dropdown.Item>
          <Dropdown.Item>Startups</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Programs</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Get Involved</span>
            <Dropdown.Menu>
              <Dropdown.Item>Programs</Dropdown.Item>
              <Dropdown.Item>Resources</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a">Partners</Menu.Item>
      <Menu.Item as="a">Contact Us</Menu.Item>
    </Container>
  </Menu>
)

function ModalExampleModal() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
  }
  

const ResponsiveNavbar = ({ fixed }) => (
  <Menu
    fixed={fixed ? "top" : null}
    inverted={!fixed}
    pointing={!fixed}
    secondary={!fixed}
    size="large"
  >
    <Container>
      <Menu.Item as={Link} to='/' active>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/about">About</Menu.Item>
      <Dropdown item pointing secondary inverted text="Community">
        <Dropdown.Menu vertical>
          <Dropdown.Item>Residents</Dropdown.Item>
          <Dropdown.Item>Startups</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Programs</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Get Involved</span>
            <Dropdown.Menu vertical>
              <Dropdown.Item>Programs</Dropdown.Item>
              <Dropdown.Item>Resources</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a">Resources</Menu.Item>
      <Menu.Item position="right">
        <Button as="a" inverted={!fixed}>
          Log in
        </Button>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
        >
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
)

export default FixedNavMenu
export { ResponsiveNavbar }
