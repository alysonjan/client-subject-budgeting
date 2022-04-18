import React, { useEffect, useState } from 'react'
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

  const [colleges, setColleges] = useState([])

  const [formData, setFormData] = useState({
    college_code: '',
    department_name: '',
    department_status: '',
  })

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const { college_code, department_name, department_status } = formData

  useEffect(() => {
    axiosInstance.get('/colleges').then((res) => {
      setColleges(res.data.result)
    })
  }, [])

  const collegeCode = Object.values(
    colleges.reduce((a, b) => {
      if (!a[b.college_code]) a[b.college_code] = b
      return a
    }, {})
  )

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post('/department/add', formData).then((res) => {
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
        Add Department
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Department Details</DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel htmlFor="curriculum_code">college code</InputLabel>
              <Select
                native
                required
                name="college_code"
                value={college_code}
                onChange={(e) => onChange(e)}
              >
                <option aria-label="None" value="" />
                {collegeCode.map((val, key) => {
                  return (
                    <option key={key} value={val.college_code}>
                      {val.college_code}
                    </option>
                  )
                })}
                ;
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="name"
              type="text"
              value={department_name}
              name="department_name"
              onChange={(e) => onChange(e)}
              fullWidth
              required
            />

            <FormControl fullWidth>
              <InputLabel htmlFor="curriculum_code">status</InputLabel>
              <Select
                native
                required
                name="department_status"
                value={department_status}
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
