import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import { AiFillDelete } from 'react-icons/ai'
import { Contact, FormData } from '../state/model'

const useStyles = makeStyles({
  card: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

interface ContactItemProps {
  contact: Contact
  contacts: Contact[]
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>
  formData: FormData
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  contacts,
  setContacts,
  formData,
}) => {
  const classes = useStyles()

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <Card className={classes.card}>
      <input type='checkbox' />
      <div>{contact.id.slice(0,5)}</div>
      <div>{formData.name}</div>
      <div>{formData.regnumber}</div>
      <div>{formData.date?.toLocaleDateString()}</div>
      <AiFillDelete onClick={() => deleteContact(contact.id)} />
    </Card>
  )
}

export default ContactItem
