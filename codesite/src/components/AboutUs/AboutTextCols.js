import React from "react"
import { Grid, Image, Segment, Header } from "semantic-ui-react"

const AboutTextCols = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
            <Grid.Column width={8}>
                <Header as='h2' style={{ fontSize: '2em' }}>
                    Babson's Community of Developers and Entrepreneurs (CODE) brings together students who are passionate about how technology is changing entrpreneurship
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Explanation
                </p>
                <Header as='h2' style={{ fontSize: '2em'}}>
                    Residents give and recieve support in the community while they pursue their academic and academic goals.
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Explanation
                </p>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Segment>
)

export default AboutTextCols