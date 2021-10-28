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
  Statistic
} from 'semantic-ui-react'

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
  const AboutPageHeader = ({ mobile }) => (
  <Segment style={{ padding: '1em 0em ', minHeight:700}} textAlign='center' vertical>
    <Container text>
      <Header
        as='h1'
        content='About Us'
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content="CODE (Community Of Developers and Entrepreneurs) is the heart of technology and entrepreneurship at Babson."
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
        <Statistic.Group size='small' widths='three'>
            <Statistic>
                <Statistic.Value>2015</Statistic.Value>
                <Statistic.Label>Founded</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>21</Statistic.Value>
                <Statistic.Label>Residents</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>180+</Statistic.Value>
                <Statistic.Label>General Members</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    </Container>
    </Segment>
  )
  
  
  
  AboutPageHeader.propTypes = {
    mobile: PropTypes.bool,
  }
  
  /* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
  export default AboutPageHeader