import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


class AboutUsStats extends Component {
  render() {
    return (
      <Container>
        <h1
          style={{
            fontSize: "2.5em",
            lineHeight: "1.5em",
            textAlign: "center",
          }}
        >
          About Us
        </h1>
        <hr
          style={{
            borderTop: "2.5px solid",
            margin: "20px 200px 50px 200px",
          }}
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
                2015
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
      </Container>
    );
  }
}

export default AboutUsStats;
