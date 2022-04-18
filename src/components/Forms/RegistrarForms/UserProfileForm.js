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
    lastname: '',
    firstname: '',
    middlename: '',
    birthdate: '',
    gender: 'male',
    address: '',
    contact_number: '',
    email: '',
    password: '',
    role: '',
  })

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const {
    lastname,
    firstname,
    middlename,
    birthdate,
    gender,
    address,
    contact_number,
    email,
    password,
    role,
  } = formData

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post('/user-profile/add', formData).then((res) => {
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
        Add User
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">User Information</DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <TextField
              margin="dense"
              label="lastname"
              type="text"
              value={lastname}
              name="lastname"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="firstname"
              type="text"
              value={firstname}
              name="firstname"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="middlename"
              type="text"
              value={middlename}
              name="middlename"
              onChange={(e) => onChange(e)}
              fullWidth
            />

            <TextField
              margin="dense"
              label="birthdate"
              type="date"
              focused="false"
              value={birthdate}
              name="birthdate"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <FormControl fullWidth>
              <InputLabel htmlFor="gender">gender</InputLabel>
              <Select
                native
                required
                name="gender"
                value={gender}
                onChange={(e) => onChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="address"
              type="text"
              value={address}
              name="address"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="contact number"
              type="text"
              value={contact_number}
              name="contact_number"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <TextField
              margin="dense"
              label="password"
              type="password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <FormControl fullWidth>
              <InputLabel htmlFor="role">role</InputLabel>
              <Select
                native
                required
                name="role"
                value={role}
                onChange={(e) => onChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="registrar">Registrar</option>
                <option value="dean">Dean</option>
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
