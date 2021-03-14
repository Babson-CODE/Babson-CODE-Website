import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MemberCard from "./Member/membercard";
import PerResident from "./PerResident";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { memberData } from "./HomePageMembers";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import EachResident from "./EachResident2";

export default class Members extends Component {
  render() {
    return (
      <div className="row">
        <Grid container spacing={4}>
          {memberData.map((data, card) => (
              <EachResident
                name={data.Name}
                CompanyPosition={data.CompanyPosition}
                Company={data.Company}
                CODEPosition={data.CODEPosition}
                AboutYou={data.AboutYou}
                linkedin={data.Linkedin}
                CompanyWebsite={data.CompanyWebsite}
                photo={data.photo_name}
              //   first_name={data.first_name}
              //   last_name={data.last_name}
              //   image={data.media.photo}
              />
          ))}
          ;
        </Grid>
      </div>
    );
  }
}

// memberGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(memberGrid);
