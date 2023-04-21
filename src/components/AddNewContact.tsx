import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ContactForm from './ContactForm'
import { FormData } from '../state/model'

type AddNewContactProps = {
  onAdd: (formData: FormData) => void
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const useStyles = makeStyles({
  btn: {
    marginRight: 10,
    backgroundColor: '#ffd700',
    borderRadius: 10,
  },
})

const AddNewContact: React.FC<AddNewContactProps> = ({
  onAdd,
  formData,
  setFormData,
}) => {
  const [showForm, setShowForm] = useState(false)
  const classes = useStyles()

  if (showForm) {
    return (
      <ContactForm
        onAdd={(formData) => {
          onAdd(formData)
          setShowForm(false)
        }}
        formData={formData}
        setFormData={setFormData}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    )
  }

  return (
    <div>
      <Button className={classes.btn} onClick={() => setShowForm(true)}>
        Add +
      </Button>
    </div>
  )
}

export default AddNewContact
