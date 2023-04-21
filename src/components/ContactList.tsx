import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { v4 as uuidv4 } from 'uuid'
import ContactItem from './ContactItem'
import AddNewContact from './AddNewContact'
import { Contact, FormData } from '../state/model'

const useStyles = makeStyles({
  mainField: {
    width: '80%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    padding: 25,
  },
})

const ContactList: React.FC = () => {
  const classes = useStyles()
  const [contacts, setContacts] = useState<Array<Contact>>([])
  const [formData, setFormData] = useState<FormData>({
    name: '',
    regnumber: null,
    date: null,
  })

  const onAdd = () => {
    setContacts([...contacts, { id: uuidv4(), formData }])
    console.log(contacts)
  }

  return (
    <div className={classes.mainField}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>Total Contacts: {contacts.length}</h2>
        <AddNewContact
          onAdd={onAdd}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          contacts={contacts}
          setContacts={setContacts}
          formData={contact.formData}
        />
      ))}
    </div>
  )
}

export default ContactList
