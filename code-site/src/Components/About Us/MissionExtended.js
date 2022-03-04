import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>Workshops</h1>
            <p style={{ textAlign: "left" }}>
              CODE holds numerous workshops on different technologies. Workshops
              are held by both CODE Members as well as industry experts who are
              award winning professionals in their field. Join our Newsletter to
              hear when our next workshoop will be held.
            </p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>CODE Office Hours</h1>
            <p style={{ textAlign: "left" }}>
              CODE Office Hours are two unique services provided by CODE. CODE
              Office Hours are hosted in the Blank Center for Entrepreneurship
              and virtually. Office Hours give studnets and alumni a chance to
              hear from techlogy experts on campus and get their feedback from
              us. Office Hours are typically held on Fridays. You can find out
              more by visiting our newsletter.
            </p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>CODE Consulting</h1>
            <p style={{ textAlign: "left" }}>
              In addition to Office Hours, CODE Consulting is another way for
              students and alumni to get feedback on their businesses. CODE
              Consulting hours can booked by emailing{" "}
              <a
                href="mailto:code@babson.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                code@babson.edu
              </a>
              . A session will typically last between one and two hours. While
              we do not charge for these sessions, we stronogly encourage
              students to donate to CODE using the{" "}
              <a
                href="http://babson.edu/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                doonate{" "}
              </a>
              button at the top of the page.
            </p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>Speaker Events</h1>
            <p style={{ textAlign: "left" }}>
              CODE brings in several speakers per semester. These speakers are
              recent graduates, often entrepreneurs. They typically have started
              or been early employees at Technology Startups.
            </p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>Hackathons</h1>
            <p style={{ textAlign: "left" }}>
              Hackathons are some of our favorite events to put on. Encouraging
              friendly competition in an environment perfect for learnign is a
              great way to build skills. We try to put on a few hackathons per
              semester. These are sometimes virtual and asyncronous, but also in
              larger event spaces. Our Newsletter also includes links and
              invitations to other hackathons at other schools in the Boston
              area.
            </p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper} elevation={5}>
            <h1>And More</h1>
            <p style={{ textAlign: "left" }}>
              We host numerous other types of events. These have ranged from fun
              social networking gatherings, visits to our Van Winkle Housing
              facility, no and low-code events, and many more. Sign up for our
              newsletter to find out where and when to participate in all our
              events.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
