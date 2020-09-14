import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MailchimpSubscribe from 'react-mailchimp-subscribe'; 
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function NewsletterSignupForm(props){
    const { classes, subscribe, status, message } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLaset] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log( 'First Name: ', first, "Last Name: ", last, 'Email:', email, 'Password: ', password); 
            // You should see email and password in console.
            // ..code to submit form to backend here...
            
        }


    return(
        <React.Fragment>
        <CssBaseline />
        <Container>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                                Newsletter Signup
                            </Typography>    
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                </form>
            </div>
    </Container>

    </React.Fragment>
    );
}