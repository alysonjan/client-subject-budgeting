import React,{ useEffect, useState } from 'react';
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


function FormDialog() {

    const [open, setOpen] = useState(false);

    const [curriculum_code, setCurriculum_code] = useState('')
    const [college_code, setCollege_code] = useState('')
    const [subject_code, setSubject_code] = useState('')
    const [subject_name, setSubject_name] = useState('')
    const [lec_units, setLec_units] = useState(0)
    const [lab_units, setLab_units] = useState(0)
    const [total_units, setTotal_units] = useState(0)
    const [year_level, setYear_level] = useState('')
    const [semester, setSemester] = useState('')
    const [school_yr_from, setSchool_yr_from] = useState('')
    const [school_yr_to, setSchool_yr_to] = useState('')
    
    const [colleges, setColleges] = useState([])
    const [subjects, setSubjects] = useState([])
    useEffect(()=>{
        axiosInstance.get('/colleges').then(res => {   
            setColleges(res.data.result)
        });
        axiosInstance.get('/subjects').then(res => {   
            setSubjects(res.data.result)
            setSubject_name(res.data.result[0])
        });
    },[])

    const collegeCode = Object.values(
        colleges.reduce((a, b) => {
            if (!a[b.college_code]) a[b.college_code]=b
            return a
        },{})
    )


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getSubject = (e)=> {
        setSubject_name(subjects[e].subject_name)
        setSubject_code(subjects[e].subject_code)
        setLec_units(subjects[e].lec_units)
        setLab_units(subjects[e].lab_units)
        setTotal_units(subjects[e].total_units)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/curriculum/add',{
                curriculum_code,
                college_code,
                subject_code,
                subject_name,
                lec_units,
                lab_units,
                total_units,
                year_level,
                semester,
                school_yr_from,
                school_yr_to,
            }).then(res => {
                if (res.status === 200) alert("Successfully added") 
                setOpen(false);
            })
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) errors.forEach(error => {
                alert(error.msg)
            });
        }
    };


    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}  >
            Add Curriculum
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
            <DialogTitle id="form-dialog-title">Curriculum Details</DialogTitle>
            <form onSubmit={e => onSubmit(e)}>
            <DialogContent>

            <TextField
                margin="dense"
                label="curriculum code"
                type="text"
                value={curriculum_code}
                name="curriculum_code"
                onChange={(e) => { setCurriculum_code(e.target.value) }}
                fullWidth
                required
            />

            <FormControl fullWidth >
                <InputLabel htmlFor="college_code">college code</InputLabel>
                <Select
                native
                required
                name="college_code"
                value={college_code}
                onChange={(e) => { setCollege_code(e.target.value) }}
                >
                <option aria-label="None" value="" />
                {collegeCode.map((val,key) => {
                    return (<option  key={key} value={val.college_code}>{val.college_code}</option> )
                })};
            
                </Select>
            </FormControl>

            <FormControl fullWidth >
                <InputLabel htmlFor="subject_name">subject name</InputLabel>
                <Select
                native
                required
                onChange={(e) =>getSubject(e.target.value)}>
                {subjects.map((val,key)=>{
                    return (<option  key={key} value={key}>{val.subject_name}</option> )
                })}
                </Select>
            </FormControl>
        
            <TextField
                type="hidden"
                value={subject_name}
            ></TextField>

            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <TextField
                disabled
                margin="dense"
                label="subject code"
                type="text"
                value={subject_code}

            />
            <TextField
                disabled
                margin="dense"
                label="lec units"
                type="text"
                value={lec_units}
            />
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <TextField
                disabled
                margin="dense"
                label="lab units"
                type="text"
                value={lab_units}
            />
            <TextField
                disabled
                margin="dense"
                label="total units"
                type="text"
                value={total_units}
            />
            </div>
            <TextField
                margin="dense"
                label="year level"
                type="Number"
                value={year_level}
                name="year_level"
                onChange={(e) => { setYear_level(e.target.value) }}
                fullWidth
                required
            />

            <FormControl fullWidth >
                <InputLabel htmlFor="semester">semester</InputLabel>
                <Select
                native
                required
                name="semester"
                value={semester}
                onChange={(e) => { setSemester(e.target.value) }}
                >
                <option aria-label="None" value="" />
                <option value="1st sem">1st sem</option>
                <option value="2nd sem">2nd sem</option>
                <option value="3rd sem">3rd sem</option>
                <option value="4th sem">4th sem</option>
                <option value="summer">summer</option>
                </Select>
            </FormControl>
            
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <TextField
                margin="dense"
                label="school year from"
                type="number"
                value={school_yr_from}
                name="school_yr_from"
                onChange={(e) => { setSchool_yr_from(e.target.value) }}
            />

            <TextField
                margin="dense"
                label="school year to"
                type="number"
                value={school_yr_to}
                name="school_yr_to"
                onChange={(e) => { setSchool_yr_to(e.target.value) }}
            />
            </div>



            </DialogContent>
            <DialogActions>
            <Button variant='outlined' onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button type='submit' variant='contained' color="primary">
                Add
            </Button>
            </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}


export default FormDialog;