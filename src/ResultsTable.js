// src/ResultsTable.js
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const ResultsTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
