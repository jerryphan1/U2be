import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TopNavbar from "./top_navbar";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      {/* <h1>U2be</h1> */}
      {/* <GreetingContainer /> */}
      <TopNavbar/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;