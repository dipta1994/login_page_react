import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useParams } from "react-router-dom";

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
    const [column, setColumn] = useState([]);

    let { id } = useParams();
    useEffect(() => {
        // declare the async data fetching function
        async function fetchData() {
            // get the data from the api
            const Response = await fetch(`http://localhost:8888/airlines/${id}`);
            // convert the data to json
            const data = await Response.json();
            console.log(data, 'm')
            setColumn(Object.keys(data[0]).splice(0, 4));

            // set state with the result
            setData(data);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [id])
    console.log(data)
    console.log(column)
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>

                    <TableRow>
                        {column.map((eachColumn) =>
                            <StyledTableCell align="center">{eachColumn}&nbsp;</StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <StyledTableRow key={data.id}>
                            <StyledTableCell align="center">{data.category}</StyledTableCell>
                            <StyledTableCell align="center">{data.subcategory}</StyledTableCell>
                            <StyledTableCell align="center">{data.type}</StyledTableCell>
                            <StyledTableCell align="center">{data.totalReceived}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>

    );
}

export default CustomizedTables;