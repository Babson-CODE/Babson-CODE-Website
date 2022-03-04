
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
  Menu,
  Segment,
  Sidebar,
  Visibility,
  List,
  Card
} from 'semantic-ui-react'

const CodeMemberTypesCardSection = () => (
    <>      
    <Segment
                textAlign='center'
                style={{ padding: '8em 0em' }}
                vertical
            >
                <Container text>
                <Header as="h2" style={{ fontSize: `2em`}}>
                    Interested in Joining?
                </Header>
                <Header as="h3">
                    Our community has 3 different types of members. Even if you're unsure about applying to be a resident, you can still be included.
                </Header>
                </Container>
            {/* </Segment> */}
            <Divider hidden />
        {/* <Segment style={{padding: `8em 0em` , textAlign: 'Center'}} vertical> */}
            {/*
            
            */}
            
                        <Card.Group centered>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Residents</Card.Header>
                                </Card.Content>
                                <Card.Content description={'The 21 members who live in the same dorm'}/>
                                <Card.Content extra>
                                    <List bulleted>
                                        <List.Item>Live in CTower alongside the rest of your CODE Family</List.Item>
                                        <List.Item>Unrestricted access to CODE resources</List.Item>
                                        <List.Item>Gain real-world skills working with the residents</List.Item>
                                    </List>
                                </Card.Content>

                            </Card>
                            <Card>
                                <Card.Content>
                                    <Card.Header>External Members</Card.Header>
                                </Card.Content>
                                <Card.Content description={'The 21 members who live in the same dorm'}/>
                                <Card.Content extra>
                                    <List bulleted>
                                        <List.Item>Participate in exclusive internal events</List.Item>
                                        <List.Item>Access to the majority of CODE resources, such as learning materials and alumni directory</List.Item>
                                        <List.Item>Priority for any applications to become a resident</List.Item>
                                    </List>
                                </Card.Content>

                            </Card>
                            <Card>
                                <Card.Content>
                                    <Card.Header>General Member</Card.Header>
                                </Card.Content>
                                <Card.Content description={'The 21 members who live in the same dorm'}/>
                                <Card.Content extra>
                                    <List bulleted>
                                        <List.Item>Become part of our larger online community</List.Item>
                                        <List.Item>Get added to the newsletter and notified of any new events</List.Item>
                                        <List.Item>Exclusive access to beta CODE programs</List.Item>
                                    </List>
                                </Card.Content>

                            </Card> 
                        </Card.Group>

        </Segment>
    </>
)
export default CodeMemberTypesCardSection