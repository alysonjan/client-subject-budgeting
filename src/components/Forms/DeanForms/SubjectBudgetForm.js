import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


import { FormControl } from '@material-ui/core';

export default function FormDialog() {

    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');


    const handleClickOpen = () => {
        setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}  >
            Generate Subject
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
            <DialogTitle id="form-dialog-title">College Form</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="code"
                label="Code"
                type="code"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="dean"
                label="Dean"
                type="dean"
                fullWidth
            />
            <FormControl fullWidth >
                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                <Select
                native
                value={age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Paramedical</option>
                <option value={20}>Non-Paramedical</option>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                <Select
                native
                value={age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Active</option>
                <option value={20}>Inactive</option>
                </Select>
            </FormControl>


            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
