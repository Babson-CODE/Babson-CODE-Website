import React from "react";
import EachResident from "./EachResident";

const cards = [1, 2, 3];

function MemberCarousel() {
  // const classes = useStyles();

  return (
    <div>
      {/* <GridList
        className={classes.gridList}
        cols={3.5}
        cellHeight={500}
        cellWidth={500}
      > */}
      {/* {memberData.map((tile) => (
          <GridListTile key={tile.media.photo}> */}
      <div className="row">
        {cards.map(() => (
          <EachResident
          // key={tile.media.photo}
          ></EachResident>
        ))}
      </div>
      {/* <img
              src={require("../../Assets/img/Members Photos" +
                tile.media.photo)}
              style={{padding: "100px"}}
            />
             <EachResident
                key={tile.media.photo}
                photo={tile.media.photo}
                name={tile.full_name}
              ></EachResident> */}
      {/* <GridListTileBar
              key={tile.media.photo}
              title={tile.full_name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`linked ${tile.full_name}`}>
                  <LinkedInIcon className={classes.title} />
                </IconButton>
              }
            /> */}
      {/* </GridListTile>
        ))} */}
      {/* </GridList> */}
    </div>
  );
}

export { MemberCarousel };
