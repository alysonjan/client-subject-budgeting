import React,{ useState } from 'react';
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
    
    const [formData,setFormData] = useState({
        subject_code: '',
        subject_name:'',
        lec_units:0,
        lab_units:0,
        subject_type:'',
        subject_category:'',
        status:'',
    }); 


    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
    const {
        subject_code,
        subject_name,
        lec_units,
        lab_units,
        subject_type,
        subject_category,
        status,
    } = formData;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/subjects/add',formData).then(res => {
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
            Add Subject
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
            <DialogTitle id="form-dialog-title">Subject Details</DialogTitle>
            <form onSubmit={e => onSubmit(e)}>
            <DialogContent>

            <TextField
                margin="dense"
                label="subject code"
                type="text"
                value={subject_code}
                name="subject_code"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            
            <TextField
                margin="dense"
                label="subject name"
                type="text"
                value={subject_name}
                name="subject_name"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <TextField
                margin="dense"
                label="lec units"
                type="Number"
                value={lec_units}
                name="lec_units"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <TextField
                margin="dense"
                label="lab units"
                type="Number"
                value={lab_units}
                name="lab_units"
                onChange={e => onChange(e)}
                fullWidth
                required
            />

            <FormControl fullWidth >
                <InputLabel htmlFor="subject_type">subject type</InputLabel>
                <Select
                native
                required
                name="subject_type"
                value={subject_type}
                onChange={e => onChange(e)}
                >
                <option aria-label="None" value="" />
                <option value="lec">Lec</option>
                <option value="lab">Lab</option>
                </Select>
            </FormControl>

            <FormControl fullWidth >
                <InputLabel htmlFor="subject_category">subject category</InputLabel>
                <Select
                native
                required
                name="subject_category"
                value={subject_category}
                onChange={e => onChange(e)}
                >
                <option aria-label="None" value="" />
                <option value="professional">Professional</option>
                <option value="general">General</option>
                </Select>
            </FormControl>

            <FormControl fullWidth >
                <InputLabel htmlFor="status">status</InputLabel>
                <Select
                native
                required
                name="status"
                value={status}
                onChange={e => onChange(e)}
                >
                <option aria-label="None" value="" />
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                </Select>
            </FormControl>

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