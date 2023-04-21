import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent, TextField } from '@material-ui/core'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FormData } from '../state/model'

type ContactFormProps = {
  onAdd: (formData: FormData) => void
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  showForm: boolean
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  dateField: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}))

const ContactForm: React.FC<ContactFormProps> = ({
  onAdd,
  formData,
  setFormData,
  showForm,
  setShowForm,
}) => {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
    setFormData({
      name: '',
      regnumber: null,
      date: null,
    })
  }

  const handleClose = () => {
    setShowForm(false)
  }

  return (
    <div>
      <Dialog open={showForm} maxWidth='xs' fullWidth>
        <DialogTitle>Форма ввода</DialogTitle>
        <DialogContent className={classes.formContainer}>
          <form onSubmit={handleFormSubmit} className={classes.form}>
            <TextField
              className={classes.textField}
              variant='outlined'
              label='Entity name'
              ref={inputRef}
              autoFocus
              onChange={handleInputChange}
              name='name'
              value={formData.name}
            />
            <TextField
              className={classes.textField}
              variant='outlined'
              label='TRN/PPSN'
              onChange={handleInputChange}
              name='regnumber'
              value={formData.regnumber}
            />

            <DatePicker
              className={classes.dateField}
              selected={formData.date}
              onChange={(date: Date | null) => {
                setFormData((prevData) => ({
                  ...prevData,
                  date: date,
                }))
              }}
              dateFormat='dd/MM/yy'
              name='date'
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Add
            </Button>
            <Button
              variant='contained'
              className={classes.button}
              onClick={handleClose}
            >
              Отмена
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default ContactForm
