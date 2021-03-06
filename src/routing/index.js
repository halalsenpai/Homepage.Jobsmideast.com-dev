import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "../pages";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AgencySignUp from "../pages/signup/AgencySignUp";
import EmployerSignUp from "../pages/signup/EmployerSignUp";
import JobSeekerSignUp from "../pages/signup/JobSeekerSignUp";
import CFooter from "../uiComponents/CFooter/CFooter";
import CHeader from "../uiComponents/CHeader/CHeader";
import EmployerAndAgencies from "../pages/EmployerAndAgencies/EmployerAndAgencies";
import JobSeekers from "../pages/JobSeekers/JobSeekers";
import ConfirmEmail from "../pages/signup/ConfirmEmail";
import Pricing from "../pages/pricing/Pricing";
import Jobs from "../pages/jobs/Jobs";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Test from "../pages/Test/Test";
function Routing() {
  return (
    <Fragment>
      <CHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-signup" component={JobSeekerSignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/agency-signup" component={AgencySignUp} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <Route exact path="/employer-signup" component={EmployerSignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/employee-and-agencies"
          component={EmployerAndAgencies}
        />
        <Route exact path="/job-seekers" component={JobSeekers} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />

        <Route
          path="*"
          render={() => (
            <div>
              <h1>Not Found</h1>
            </div>
          )}
        />
      </Switch>
      <CFooter />
    </Fragment>
  );
}

export default Routing;
