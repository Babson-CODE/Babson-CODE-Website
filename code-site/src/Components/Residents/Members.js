import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EachResident from "./EachResident2";
import PerResident from "./PerResident";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { memberData } from "./HomePageMembers";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

export default class Members extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={4}>
          {memberData.map((data, card) => (
            <div>
              console.log(data)
              <Grid item key={card} xs={12} sm={6} md={4}>
                <EachResident
                  email={data.email}
                  linkedin={data.linkedIn}
                  first_name={data.first_name}
                  last_name={data.last_name}
                  image={data.media.photo}
                />
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
    );
  }
}
