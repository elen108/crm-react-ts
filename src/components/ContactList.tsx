import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ContactItem from './ContactItem'
import AddNewContact from './AddNewContact'
import { Contact } from '../state/model'

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
  const [value, setValue] = useState<string>('')

  const onAdd = () => {
    setContacts([...contacts, { id: Date.now(), value }])
    console.log(contacts)
  }

  return (
    <div className={classes.mainField}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>Total Contacts: {contacts.length}</h2>
        <AddNewContact onAdd={onAdd} value={value} setValue={setValue} />
      </div>

      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          contacts={contacts}
          setContacts={setContacts}
          text={contact.value}
        />
      ))}
    </div>
  )
}

export default ContactList
