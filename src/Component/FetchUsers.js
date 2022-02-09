import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function CustomizedTables() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Rocket_Name&nbsp;</StyledTableCell>
                        <StyledTableCell align="center">cost_per_launch&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="center">success_rate_pct&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="center">first_flight&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <StyledTableRow key={data.name}>
                            <StyledTableCell align="center">{data.rocket_id}</StyledTableCell>
                            <StyledTableCell align="center">{data.cost_per_launch}</StyledTableCell>
                            <StyledTableCell align="center">{data.success_rate_pct}</StyledTableCell>
                            <StyledTableCell align="center">{data.first_flight}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTables;