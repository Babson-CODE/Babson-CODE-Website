/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
} from 'semantic-ui-react'
import DesktopContainer from '../Shared/DesktopContainer'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })
  
  /* Heads up!
   * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
   * components for such things.
   */
  const HomepageHeading = ({ mobile }) => (
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
    <Container text>
      <Header
        as='h1'
        content='Welcome to CODE'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content="Explore Babson's Community of Tech-Focused Entrepreneurs"
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button primary size='huge'>
        Learn more
        <Icon name='right arrow' />
      </Button>
    </Container>
    </Segment>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  
  /* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
  export default HomepageHeading