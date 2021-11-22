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
import { Paper } from '@material-ui/core';
import axiosInstance from '../../../helpers/axios';
import SubjectLoadingTab from '../../Tabs/SubjectLoadingTab';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';



function FormDialog() {

    const [open, setOpen] = useState(false);

    // const [curriculumData, setCurriculumData] = useState([])

    // useEffect(()=>{
    //     axiosInstance.get('/get/curriculum').then(res => {   
    //         setCurriculumData(res.data)
    //     });
    // },[])
    

    // const currCode = Object.values(
    //     curriculumData.reduce((a, b) => {
    //         if (!a[b.curriculum_code]) a[b.curriculum_code]=b
    //         return a
    //     },{})
    // )

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
        <Button variant="text" color="primary" onClick={handleClickOpen}  >
            <PersonAddRoundedIcon/>
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
            <DialogTitle id="form-dialog-title">Assign Subject</DialogTitle>
            <form onSubmit={e => onSubmit(e)}>
            <DialogContent>

            <Paper><h2 style={{textAlign:"center"}}>Introduction to Programming II</h2></Paper>

            <FormControl fullWidth >
                <InputLabel htmlFor="curriculum_code">Assign Teacher</InputLabel>
                <Select
                native
                required
                name="curriculum_code"
                value={curriculum_code}
                onChange={e => onChange(e)}
                >
                <option aria-label="None" value="" />
                <option value="Ira Pongasi">Ira Pongasi</option>
                <option value="Zandra Salas">Zandra Salas</option>
                <option value="Farah Sombilon">Farah Sombilon</option>
                <option value="Roden Ugang">Roden Ugang</option>
                {/* {currCode.map((val,key) => {
                    return (<option key={key} value={val.curriculum_code}>{val.curriculum_code}</option> )
                })}; */}
                </Select>
            </FormControl>
            <br /><br />
            <Paper>
                <SubjectLoadingTab/>
            </Paper>
    

        

            </DialogContent>
            <DialogActions>
            <Button variant='outlined' onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button type='submit' variant='contained' color="primary">
                Assign
            </Button>
            </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}


export default FormDialog;