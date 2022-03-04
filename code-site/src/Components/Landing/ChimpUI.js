import React, { useState } from "react";
import jsonp from "jsonp";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default ({
  // Source: https://github.com/hamdiceylan/mailchimp-react
  styles = {
    sendingMsg: {
      color: "#0652DD",
    },
    successMsg: {
      color: "#009432",
    },
    duplicateMsg: {
      color: "#EE5A24",
    },
    errorMsg: {
      color: "#ED4C67",
    },
  },
  className,
  FirstNamePlaceHolder = "First Name *",
  LastNamePlaceHolder = "Last Name *",
  placeHolder = "Email Adress *",
  buttonClassName,
  action,
  messages = {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!",
  },
}) => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${action}&EMAIL=${email}&FNAME=${firstName}&LNAME=${lastName}`.replace(
      "/post?",
      "/post-json?"
    );
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    !regex.test(email) ? setStatus("empty") : sendData(url);
  };
  const sendData = (url) => {
    setStatus("Sending...");
    jsonp(url, { param: "c" }, (err, data) => {
      console.log(data);
      if (data.msg.includes("already subscribed")) {
        setStatus(
          "Looks like you are already subscribed, Keep an eye out for our newsletter. If you don't see it, check your spam. you can also email us through our contact us page."
        );
      } else if (err) {
        setStatus("There was an unknown error, please email us to subscribe.");
      } else if (data.result !== "success") {
        setStatus("There was an unknown error, please email us to subscribe.");
      } else {
        setStatus(
          "Success, you have successfully subscribed! Keep an eye out for our next edition."
        );
      }
    });
  };
  console.log(status);
  console.log("form");
  return (
    <Container>
      <h3 style={{ marginBottom: "10px" }}>Join our Newsletter!</h3>
      <form onSubmit={handleSubmit} className={className}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <input
              placeholder={FirstNamePlaceHolder}
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={firstName}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "7px",
                borderColor: "#d3d3d3",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              placeholder={LastNamePlaceHolder}
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={lastName}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "7px",
                borderColor: "#d3d3d3",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              placeholder={placeHolder}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "7px",
                borderColor: "#d3d3d3",
              }}
            />
          </Grid>
        </Grid>
        <Button
          disabled={status === "sending" || status === "success"}
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: "10px",
            backgroundColor: "green",
            padding: "10px 30px",
            borderRadius: "15px",
            color: "white",
            fontSize: "20px",
          }}
          className={buttonClassName}
        >
          {messages.button}
        </Button>
        {status !== "empty" && <h3>{status}</h3>}
        {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
        {/* <div className="msg-alert">
          {status === "sending" && (
            <p style={styles.sendingMsg}>{messages.sending}</p>
          )}
          {status === "success" && <p style={styles.successMsg}>{status}</p>}
          {status === "duplicate" && (
            <p style={styles.duplicateMsg}>{messages.duplicate}</p>
          )}
          {status === "empty" && (
            <p style={styles.errorMsg}>{messages.empty}</p>
          )}
          {status === "error" && (
            <p style={styles.errorMsg}>{messages.error}</p>
          )}
        </div> */}
      </form>
    </Container>
  );
};
