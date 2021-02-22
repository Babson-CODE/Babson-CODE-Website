import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Landing/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Newsletter from "./Components/Newsletter/NewsletterPage";
// import ContactUs from "./Components/ContactUs/ContactUsPage";
import Partners from "./Components/Partners/partnerspage";
import Residents from "./Components/Residents/ResidentsPage";
import StartupsCourasel from "./Components/Startups/CODEStartupsCarousel";
// import Resources from "./Components/Resources/Resources";
// import "../styles/Style.css"
import NoMatch from "./Components/Other/NoMatch";
import Donate from "./Components/Other/Donate";
import ComingSoon from "./Components/Other/ComingSoon";
import Apply from "./Components/Other/Apply";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact-us" component={ComingSoon} />
    <Route exact path="/newsletter" component={Newsletter} />
    <Route exact path="/residents" component={Residents} />
    <Route exact path="/resources" component={ComingSoon} />
    <Route exact path="/partners" component={ComingSoon} />
    <Route exact path="/StartupsCourasel" component={StartupsCourasel} />
    <Route exact path="/Donate" component={Donate} />
    {/* <Route exact path="/apply" component={Apply} /> */}
    <Route
      exact
      path="/abc"
      render={() => (window.location = "https://apply.babsoncode.dev")}
    />
    <Route path="/404" component={NoMatch} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
