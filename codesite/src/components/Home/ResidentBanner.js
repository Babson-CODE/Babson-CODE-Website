import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createMedia } from "@artsy/fresnel"
import PropTypes from "prop-types"
import ResponsiveContainer from "../Shared/ResponsiveContainer"

import {
  Button,
  Container,
  Dropdown,
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
} from "semantic-ui-react"


const ResidentBanner = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        {/* two columns, side-by-side picture and text - repeated three times, with the order alternating */}
      <Grid container stackable verticalAlign='middle'>
        
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        
            <Grid.Column floated='left' width={6}>
                <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
            </Grid.Column>


            <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    We Help Companies and Companions
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    We can give your company superpowers to do things that they never thought possible.
                    Let us delight your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                    bioengineered.
                </p>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
    
)
export default ResidentBanner