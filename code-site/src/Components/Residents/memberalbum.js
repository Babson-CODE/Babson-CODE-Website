import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import membercard from './Member/membercard';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { memberData } from './Member/memberdata';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const theme = createMuiTheme();

const styles = {
    root:{
        icon: {
        marginRight: theme.spacing(2),
        },
        heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
        marginTop: theme.spacing(4),
        },
        cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        },
        card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        },
        cardMedia: {
        paddingTop: '56.25%', // 16:9
        },
        cardContent: {
        flexGrow: 1,
        },
        footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        },
    }
  };

function memberGrid(props) { 

const { classes } = props;

    return(
        <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {memberData.map((data, card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <membercard email={data.email} 
                        linkedin={data.linkedIn} 
                        first_name={data.first_name} 
                        last_name={data.last_name} 
                        full_name={data.full_name}
                        image={data.image}> </membercard>
                    </Grid>
                ))
                };
            </Grid>
        </Container>
        </React.Fragment>
    );
}

memberGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

function memberGridList(props) { 

    const { classes } = props;
    
        return(
            <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {memberData.map((data, card) => (
                        <GridListTile key={card} cols={1}>

                            <img src={data.image} alt={data.full_name} />
                        </GridListTile>
                    ))
                    };
                </GridList>
            </Container>
            </React.Fragment>
        );
    }
    
    memberGrid.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    memberGridList.propTypes = {
        classes: PropTypes.object.isRequired,
    };

/*                             <membercard email={data.email} 
                            linkedin={data.linkedIn} 
                            first_name={data.first_name} 
                            last_name={data.last_name} 
                            full_name={data.full_name}
                            image={data.image}> </membercard>
                            */

const ResidentBlob = withStyles(styles)(memberGridList);
export {ResidentBlob};
export default withStyles(styles)(memberGrid);