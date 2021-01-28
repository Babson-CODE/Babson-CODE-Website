import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Landing/Home";
import AboutUs from "./Components/About Us/AboutUs";
// import ContactUs from "./Components/ContactUs/ContactUsPage";
// import Partners from "./Components/Partners/PartnersPage";
import Residents from "./Components/Residents/ResidentsPage";
// import Resources from "./Components/Resources/Resources";
// import "../styles/Style.css"
import NoMatch from "./Components/Other/NoMatch";
import ComingSoon from "./Components/Other/ComingSoon"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact-us" component={ComingSoon} />
    <Route exact path="/partners" component={ComingSoon} />
    <Route exact path="/residents" component={Residents} />
    <Route exact path="/resources" component={ComingSoon} />
    <Route exact path="/partners" component={ComingSoon} />
    <Route exact path="/donate" component={ComingSoon} />
    {/* <Route
      path="/donate"
      component={() => {
        // window.location.href = "https://babson.edu/donate";
        return null;
      }}
    /> */}
    <Route path="/404" component={NoMatch}/>
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
