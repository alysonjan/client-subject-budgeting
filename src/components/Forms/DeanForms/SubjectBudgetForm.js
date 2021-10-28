import React,{useEffect, useState} from 'react';
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

    const [curriculumData, setCurriculumData] = useState([])

    useEffect(()=>{
        axiosInstance.get('/get/curriculum').then(res => {   
            setCurriculumData(res.data)
        });
    },[])
    

    const currCode = Object.values(
        curriculumData.reduce((a, b) => {
            if (!a[b.curriculum_code]) a[b.curriculum_code]=b
            return a
        },{})
    )

    const [formData,setFormData] = useState({
        curriculum_code: '',
        first_year_students:'',
        second_year_students:'',
        third_year_students:'',
        fourth_year_students:'',
    });

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
    const {curriculum_code, first_year_students, second_year_students, third_year_students, fourth_year_students } = formData;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/generate-subject/add',formData).then(res => {
                if (res.status === 200) setOpen(false);
            })
        } catch (err) {
            console.error(err);
        }
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
            {/* <FormControl fullWidth >
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
            </FormControl> */}

            <TextField
                margin="dense"
                label="First Year Students"
                type="Number"
                value={first_year_students}
                name="first_year_students"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <TextField
                margin="dense"
                label="Second Year Students"
                type="Number"
                value={second_year_students}
                name="second_year_students"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <TextField
                margin="dense"
                label="Third Year Students"
                type="Number"
                value={third_year_students}
                name="third_year_students"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <TextField
                margin="dense"
                label="Fourth Year Students"
                type="Number"
                value={fourth_year_students}
                name="fourth_year_students"
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


export default FormDialog;