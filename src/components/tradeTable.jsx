import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
        {console.log('This is basic table props', props)}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Trade Id</TableCell>
            <TableCell align="right">Security Id</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Trade Date</TableCell>
            <TableCell align="right">Settlement Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.securityId}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.tradeDate.toString()}</TableCell>
              <TableCell align="right">{row.settlementDate.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}