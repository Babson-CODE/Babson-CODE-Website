import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Headline from "./../Universal Components/Headline";

class AboutUsStats extends Component {
  render() {
    return (
      <div>
        <Headline
          headline={"About Us"}
          subheadline={
            "Since 2016, CODE has been at the center of tech & technological innovation at Babson"
          }
        />
        <Container
          height="100vh"
          width="100vw"
          mb="auto"
          mt="auto"
          fontWeight="fontWeightMedium"
        >
          <Grid container spacing={10} justify="center">
            <Grid item>
              <Typography
                style={{ textAlign: "center" }}
                component="h3"
                variant="h5"
                color="textPrimary"
              >
                2016
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                component="h4"
                variant="h6"
                color="textPrimary"
              >
                Founded
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ textAlign: "center" }}
                component="h3"
                variant="h5"
                color="textPrimary"
              >
                $50+ Million
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                component="h4"
                variant="h6"
                color="textPrimary"
              >
                Startups Worth
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ textAlign: "center" }}
                component="h3"
                variant="h5"
                color="textPrimary"
              >
                21
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                component="h4"
                variant="h6"
                color="textPrimary"
              >
                Residents
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ textAlign: "center" }}
                component="h3"
                variant="h5"
                color="textPrimary"
              >
                200+
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                component="h4"
                variant="h6"
                color="textPrimary"
              >
                General Memebers
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default AboutUsStats;
