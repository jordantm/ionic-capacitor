import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { IonApp, IonPage, IonRow, IonCol, IonText } from "@ionic/react";
import "./App.css";
import Home from "./components/home/Home";
import Signup from "./components/signUp/Signup";
import SignIn from "./components/signIn/SignIn";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
// import IndexView from "./indexView";
import * as ROUTES from "./constants/routes";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <IonApp>
          <IonPage>
            <Switch>
              <Route exact path={ROUTES.SIGN_UP} component={Signup} />
              <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route
                exact
                path={ROUTES.FORGOT_PASSWORD}
                component={ForgotPassword}
              />
              {/* <Route exact path="/" component={IndexView} /> */}
            </Switch>
          </IonPage>
          <div style={{ position: "fixed", bottom: "0" }}>
            <NavLink to="/">
              <IonRow>
                <IonCol>
                  <IonText>
                    <h6 no-margin text-end className="small black">
                      Home
                    </h6>
                  </IonText>
                </IonCol>
              </IonRow>
            </NavLink>
          </div>
        </IonApp>
      </Router>
    );
  }
}

export default App;
