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


export default function DenseTable({subjectBudget}) {

    const sectionsSum = subjectBudget.map(item => item.no_of_sections).reduce((prev, curr)=> prev + curr,0);
    const totalTeachingHrsSum = subjectBudget.map(item => item.overall_teaching_hours).reduce((prev,curr)=> prev + curr, 0);
    const noOfFacultySum = subjectBudget.map(item => item.no_of_faculty).reduce((prev,curr)=> prev + curr, 0);
    const radHoursSum = subjectBudget.map(item => item.rad_hours).reduce((prev,curr)=> prev + curr, 0);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="subject budgeting table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Year</StyledTableCell>
                <StyledTableCell align="center">Course code</StyledTableCell>
                <StyledTableCell align="center">Descriptive Title</StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>Units<br/>Lec Lab Total</StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>Teaching hrs<br/>Lec Lab Total</StyledTableCell>
                <StyledTableCell align="center">Students</StyledTableCell>
                <StyledTableCell align="center">No. of Sections</StyledTableCell>
                <StyledTableCell align="center">Total Teaching hrs.</StyledTableCell>
                <StyledTableCell align="center">No. of Faculty</StyledTableCell>
                <StyledTableCell align="center">RAD hrs.</StyledTableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {subjectBudget.map((item,index)=>(

                <StyledTableRow key={index}>
                <StyledTableCell align="center" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.year_level}</StyledTableCell>
                <StyledTableCell sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.subject_code}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.subject_name}</StyledTableCell>
                <StyledTableCell align="left" >{item.lec_units}</StyledTableCell>
                <StyledTableCell align="left" >{item.lab_units}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.total_units}</StyledTableCell>
                <StyledTableCell align="left">{item.lec_teaching_hours}</StyledTableCell>
                <StyledTableCell align="left">{item.lab_teaching_hours}</StyledTableCell>
                <StyledTableCell align="left" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.total_teaching_hours}</StyledTableCell>
                <StyledTableCell align="center" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.students}</StyledTableCell>
                <StyledTableCell align="center" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.no_of_sections}</StyledTableCell>
                <StyledTableCell align="center" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.overall_teaching_hours}</StyledTableCell>
                <StyledTableCell align="center" sx={{ borderRight: 1,borderRightColor: '#676767'}}>{item.no_of_faculty}</StyledTableCell>
                <StyledTableCell align="center">{item.rad_hours}</StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        <div style={{margin:'10px'}}>
        <details>
            <summary>TOTAL</summary>
            Sections: {sectionsSum} <br/>Teaching Hours: {totalTeachingHrsSum} <br/>No. of Faculty: {noOfFacultySum.toFixed(1)} <br/>RAD hours: {radHoursSum}
        </details>
        </div>
        </TableContainer>
    );
}