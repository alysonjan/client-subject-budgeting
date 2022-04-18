import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { FormControl } from '@material-ui/core'
import axiosInstance from '../../../helpers/axios'

function FormDialog() {
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    college_code: '',
    college_name: '',
    college_type: '',
    college_status: '',
  })

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const { college_code, college_name, college_type, college_status } = formData

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post('/colleges/add', formData).then((res) => {
        if (res.status === 200) alert('Successfully added')
        setOpen(false)
        window.location.reload(false)
      })
    } catch (err) {
      const errors = err.response.data.errors
      if (errors)
        errors.forEach((error) => {
          alert(error.msg)
        })
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add College
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">College Details</DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <TextField
              margin="dense"
              type="text"
              label="code"
              value={college_code}
              name="college_code"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="name"
              type="text"
              value={college_name}
              name="college_name"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <FormControl fullWidth>
              <InputLabel htmlFor="curriculum_code">type</InputLabel>
              <Select
                native
                required
                name="college_type"
                value={college_type}
                onChange={(e) => onChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="paramedical">Paramedical</option>
                <option value="non-paramedical">Non-Paramedical</option>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel htmlFor="curriculum_code">status</InputLabel>
              <Select
                native
                required
                name="college_status"
                value={college_status}
                onChange={(e) => onChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default FormDialog
