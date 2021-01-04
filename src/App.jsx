import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Grid } from "@material-ui/core";

import ListUser from "./pages/ListUser";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ProfileUser from "./pages/ProfileUser";
import MatchHistory from "./pages/MatchHistory";
import MatchPlayed from "./pages/MatchPlayed";


import ResponsiveDrawer from "./layout/ResponsiveDrawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "2rem",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Fragment>
        <ResponsiveDrawer>
          <Grid container>
            <Grid item xs={12}  className={classes.content}>
              <Switch>
                <Route exact path="/" component={ListUser} />
                {/* Authenticate */}
                <Route exact path="/listUser" component={ListUser} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                {/*  */}
                <Route path="/profileUser" component={ProfileUser} />
                <Route exact path="/matchHistory" component={MatchHistory} />
                <Route exact path="/matchPlayed" component={MatchPlayed} />
                <Route exact path="/chat" component={Chat} />
              </Switch>
            </Grid>
          </Grid>
        </ResponsiveDrawer>
      </Fragment>
    </Router>
  );
};

export default App;
