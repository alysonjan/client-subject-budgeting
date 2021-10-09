import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import axiosInstance from '../../../helpers/axios';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateBudget } from '../../../actions/subjectbudget';


function FormDialog({generateBudget,history}) {

    const [open, setOpen] = useState(false);
    const [curriculumData, setCurriculumData] = useState([])
    //const [curriculum, setCurriculum] = useState([])
    axiosInstance.get('/get/curriculum').then(res => {   
        setCurriculumData(res.data)
    })
    const currCode = Object.values(
        curriculumData.reduce((a, b) => {
            if (!a[b.curriculum_code]) a[b.curriculum_code]=b
            return a
        },{})
    )

    const [formData,setFormData] = useState({
        curriculum_code: '',
        year_level:'',
        students:'',
    });

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
    const {curriculum_code, year_level, students } = formData;

    const handleClickOpen = () => {
        setOpen(true);
        
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = e => {
        e.preventDefault();
        generateBudget(formData,history)
    };


    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}  >
            Generate Subject
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
            <DialogTitle id="form-dialog-title">Form</DialogTitle>
            <form onSubmit={e => onSubmit(e)}>
            <DialogContent>

            <FormControl fullWidth >
                <InputLabel htmlFor="curriculum_code">Program</InputLabel>
                <Select
                native
                required
                name="curriculum_code"
                value={curriculum_code}
                onChange={e => onChange(e)}
                >
                <option aria-label="None" value="" />
                {currCode.map((val,key) => {
                    return (<option key={key} value={val.curriculum_code}>{val.curriculum_code}</option> )
                })};
            
                </Select>
            </FormControl>
            <FormControl fullWidth >
                <InputLabel htmlFor="year_level">Year Level</InputLabel>
                <Select
                native
                required
                value={year_level}
                name="year_level"
                onChange={e => onChange(e)}

                >
                <option aria-label="None" value="" />
                {curriculumData.map((val,key) => {
                    return(<option key={key} value={val.year_level}>{val.year_level}</option>)
                })};

                </Select>
            </FormControl>
            <TextField
                autoFocus
                margin="dense"
                id="students"
                label="Students"
                type="Number"
                value={students}
                name="students"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            </DialogContent>
            <DialogActions>
            <Button variant='outlined' onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button type='submit' variant='contained' color="primary">
                Generate
            </Button>
            </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}

FormDialog.propTypes = {
    generateBudget: PropTypes.func.isRequired,
}


export default connect(null,{generateBudget})(withRouter(FormDialog));