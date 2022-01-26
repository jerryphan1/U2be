import React from "react";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import VideoShowContainer from './videos/video_show_container';
import Home from "./home";
import ErrorPage from "./error_page";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/videos/:videoId' component={VideoShowContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/error" component={ErrorPage}/>
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default App;