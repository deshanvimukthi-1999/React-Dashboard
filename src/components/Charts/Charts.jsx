import "./charts.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody, TableCell ,TableContainer,TableHead ,TableRow,Paper  }from '@material-ui/core';


    const useStyles = makeStyles({
        table: {
          minWidth: 500,
        },
      });

      function createData(FoodItems, Price, ProductID) {
        return {FoodItems, Price, ProductID  };
      }

      const rows = [
        createData('Pizza', 159, 6.04),
        createData('French Fries', 237, 9.0),
        createData('Multigrain Hot Cereal', 262, 16.0, 24),
        createData('Friend Egg Sandwich', 262, 16.0, 24),
      ];

      export default function Charts() {
        const classes = useStyles();
      
            return (
                <div className="container1">
                <div className="tableHeader">RECENT ORDERS REQUESTED</div>
                <div className="buttonClass">
                <button className="button">View All</button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
        </div>
        );
}