import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./charts.css";

function createData(FoodItem, Price, ProductID) {
  return { FoodItem, Price, ProductID };
}

const rows = [
  createData('Pizza', 159, 6.0),
  createData('French Fries', 237, 9.03),
  createData('Multigrain Hot Cerea', 262, 16.0,),
  createData('Fried Egg Sandwich', 305, 3.7),

];

export default function Charts() {


  return (
    <TableContainer component={Paper}>
        <div className="container1">
            <div className="tableHeader">RECENT ORDERS REQUESTED</div>
              <div className="buttonClass">
                <button className="button">View All</button>
                </div>
        <TableHead>
          <TableRow>
            <TableCell>Food Item</TableCell>
            <TableCell align="right"> Price</TableCell>
            <TableCell align="right">Product ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.FoodItem}>
              <TableCell component="th" scope="row">
                {row.FoodItem}
              </TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.ProductID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </div>
    </TableContainer>
  );
}
