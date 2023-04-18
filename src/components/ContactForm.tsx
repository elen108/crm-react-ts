import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

type ContactFormProps = {
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

const ContactForm: React.FC<ContactFormProps> = ({
  onAdd,
  value,
  setValue,
}) => {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value !== '') {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter text'
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className={classes.btn} type='submit'>
        Add +
      </Button>
    </form>
  )
}
export default ContactForm
