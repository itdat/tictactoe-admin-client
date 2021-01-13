import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Search from "./../components/Search/UserSearchHeader";

const useStyles = makeStyles({
  
});
const Profile = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1>Profile User</h1>
      <Grid container justify="center" alignItems="center" >
        <h3>Username:&nbsp;</h3>
        <Search></Search>
      </Grid>
    </Container>
  
  );
};

export default Profile;
