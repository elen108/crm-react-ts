import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ContactForm from './ContactForm'

type AddNewContactProps = {
  onAdd: (value: string) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
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
  value,
  setValue,
}) => {
  const [showForm, setShowForm] = useState(false)
  const classes = useStyles()

  if (showForm) {
    return (
      <ContactForm
        onAdd={(value) => {
          onAdd(value)
          setShowForm(false)
        }}
        value={value}
        setValue={setValue}
      />
    )
  }

  return (
    <div >
      <Button className={classes.btn} onClick={() => setShowForm(true)}>Add +</Button>
    </div>
  )
}

export default AddNewContact
