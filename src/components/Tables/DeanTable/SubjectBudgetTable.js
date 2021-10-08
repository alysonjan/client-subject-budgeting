import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#676767',
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
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
    }));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Course code</StyledTableCell>
                <StyledTableCell align="center">Descriptive Title</StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>Units</StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>Teaching hrs.</StyledTableCell>
                <StyledTableCell align="center">Students</StyledTableCell>
                <StyledTableCell align="center">No. of Sections</StyledTableCell>
                <StyledTableCell align="center">Total Teaching hrs.</StyledTableCell>
                <StyledTableCell align="center">No. of Faculty</StyledTableCell>
                <StyledTableCell align="center">RAD hrs.</StyledTableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow
                key={row.name}
                //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                //sx={{ borderRight: 2  }}
                >
                <StyledTableCell component="th" scope="row"  sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.name}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.calories}</StyledTableCell>
                <StyledTableCell align="left" >{row.fat}</StyledTableCell>
                <StyledTableCell align="left" >{row.fat}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.carbs}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.protein}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.protein}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.protein}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{row.protein}</StyledTableCell>
                <StyledTableCell align="left">{row.protein}</StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}