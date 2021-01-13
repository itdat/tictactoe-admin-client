import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Search from "./../components/Search/UserSearchHeader";

import axios from "axios";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#004c9e",
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const loadData = (id, username, email, match, cup, rank, winRatio) => {
  return { id, username, email, match, cup, rank, winRatio };
};
const rows = [
  loadData(1, "nvanhuy", "nvh@gmail.com", 500, 100, 1,"50%" ),
  loadData(2, "ntuandat", "ntd@gmail.com", 400, 90, 2, "50%"),
  loadData(3, "ltuyen", "ltu@gmail.com" ,300, 120, 3, "50%"),
  loadData(4, "tvminhhung", "tvmh@gmail.com" ,200, 180, 4, "50%"),
];
const History = () => {
  const classes = useStyles();
  //const [rows, setRows] = useState([]);
  const history = useHistory();
  //const username = "nvh";
  const [name] = useState(localStorage.getItem("currentName") || "");

  const handleRowClick = (e) => {
    history.push("/room");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   const res = await axios(`http://localhost:4000/users/history/${name}`);
  //   console.log(res.data);
  //   setRows([...res.data]);
  // }, [rows.id]);
  return (
    <Container>
      <h1>List User</h1>
      <Grid container justify="flex-end" alignItems="center">
        <Search />
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: "25px", marginBottom: "25px" }}
      ></Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Match</StyledTableCell>
              <StyledTableCell>Cup</StyledTableCell>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell>Win Ratio</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} hover onClick={handleRowClick}>
                <StyledTableCell>{row.username}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.match}</StyledTableCell>
                <StyledTableCell>{row.cup}</StyledTableCell>
                <StyledTableCell>{row.rank}</StyledTableCell>
                <StyledTableCell>{row.winRatio}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default History;
