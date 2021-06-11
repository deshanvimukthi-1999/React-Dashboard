import "./charts.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableBody, TableCell ,TableContainer,TableHead ,Paper  }from '@material-ui/core';


    const useStyles = makeStyles({
        table: {
          minWidth: 200,
        },
      });

      function createData(FoodItems, Price, ProductID) {
        return {FoodItems, Price, ProductID  };
      }

      const rows = [
        createData('Frozen yoghurt', 159, 6.04),
        createData('Ice cream', 237, 9.0),
        createData('Eclair', 262, 16.0, 24),
        createData('Eclair', 262, 16.0, 24),
        createData('Eclair', 262, 16.0, 24),
      ];

      export default function Charts() {
     
      
            return (
                <div className="chart">
                <TableContainer className="headerTitle">
                    <h5>RECENT ORDERS REQUESTED</h5>
                    <button className="btn1">View All</button>
                    <hr />
                    <TableHead className="tHead">
                        <TableCell align="right">FoodItems</TableCell>
                        <TableCell align="right"> Price</TableCell>
                        <TableCell align="right">ProductID </TableCell>
                    </TableHead>

                    <TableBody>
                        <TableCell align="right">
                            <img className="image" src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/pizza.jpg" alt="imge" />
                            Pizza
                        </TableCell>
                        <TableCell align="right">ada</TableCell>
                        <TableCell align="right">adas</TableCell>
                    </TableBody>

                    <TableBody>
                        <TableCell align="right">
                            <img className="image" src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/french-fries.jpg" alt="imge1" />
                            faf
                        </TableCell>
                        <TableCell align="right">ada</TableCell>
                        <TableCell align="right">adas</TableCell>
                    </TableBody>

                    <TableBody>
                        <TableCell align="right">
                            <img className="image" src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/cereals.jpg" alt="imge2" />
                            faf
                        </TableCell>
                        <TableCell align="right">ada</TableCell>
                        <TableCell align="right">adas</TableCell>
                    </TableBody>

                    <TableBody>
                        <TableCell align="right">
                            <img className="image" src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/egg-sandwich.jpg" alt="imge3" />
                            faf
                        </TableCell>
                        <TableCell align="right">ada</TableCell>
                        <TableCell align="right">adas</TableCell>
                    </TableBody>
                </TableContainer>
                </div>
            );
    }