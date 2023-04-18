import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card } from '@material-ui/core'
import { AiFillDelete } from 'react-icons/ai'
import { Contact } from '../state/model'

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
  text: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  contacts,
  setContacts,
  text,
}) => {
  const classes = useStyles()

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <Card className={classes.card}>
      <input type='checkbox' />
      <div>{text}</div>
      <AiFillDelete onClick={() => deleteContact(contact.id)} />
    </Card>
  )
}

export default ContactItem
