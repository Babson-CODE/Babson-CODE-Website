import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MemberCard from "./Member/membercard";
import PerResident from "./PerResident";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { memberData } from "./Member/memberdata";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// const theme = createMuiTheme();

// const styles = {
//   root: {
//     icon: {
//       marginRight: theme.spacing(2),
//     },
//     heroContent: {
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//       marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//       paddingTop: theme.spacing(8),
//       paddingBottom: theme.spacing(8),
//     },
//     card: {
//       height: "100%",
//       display: "flex",
//       flexDirection: "column",
//     },
//     cardMedia: {
//       paddingTop: "56.25%", // 16:9
//     },
//     cardContent: {
//       flexGrow: 1,
//     },
//     footer: {
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(6),
//     },
//   },
// };

// function memberGrid(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <p>test</p>
//       {/* <Container className={classes.cardGrid} maxWidth="md"> */}
//       <Container>
//         <Grid container spacing={4}>
//           {memberData.map((data, card) => (
//             <Grid item key={card} xs={12} sm={6} md={4}>
//               <p>abc</p>
//               <membercard
//                 email={data.email}
//                 linkedin={data.linkedIn}
//                 first_name={data.first_name}
//                 last_name={data.last_name}
//                 full_name={data.full_name}
//                 image={data.image}
//               >
//               </membercard>
//             </Grid>
//           ))}
//           ;
//         </Grid>
//       </Container>
//     </div>
//   );
// }

export default class Members extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={4}>
          {memberData.map((data, card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <MemberCard
                email={data.email}
                linkedin={data.linkedIn}
                first_name={data.first_name}
                last_name={data.last_name}
                image={data.media.photo}
              />
            </Grid>
          ))};
        </Grid>
      </div>
    );
    // return membercard.map((resident) => <PerResident key={resident} />);
  }
}

// memberGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(memberGrid);
