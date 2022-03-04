import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { memberData } from "./HomePageMembers";
import EachResident from "./EachResident2";

export default class Members extends Component {
  render() {
    return (
      <div className="row">
        <Grid container spacing={4}>
          {memberData.map((data) => (
              <EachResident
                key={data.Name}
                backgroundColor={this.props.color}
                name={data.Name}
                CompanyPosition={data.CompanyPosition}
                Company={data.Company}
                CODEPosition={data.CODEPosition}
                AboutYou={data.AboutYou}
                linkedin={data.Linkedin}
                CompanyWebsite={data.CompanyWebsite}
                photo={data.photo_name}
              />
          ))}
        </Grid>
      </div>
    );
  }
}
