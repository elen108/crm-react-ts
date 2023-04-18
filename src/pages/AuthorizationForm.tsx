import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  form: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
  },
  textField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
}))

interface User {
  email: string
  password: string
}

const AuthorizationForm: React.FC = () => {
  const classes = useStyles()
  const [user, setUser] = useState<User>({ email: '', password: '' })
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(user)
    // Navigate to home page
    navigate('/home')
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1 className={classes.title}>LOGO</h1>
      <p >Welcome To CRM System</p>
      <p>Sign In To Your Account</p>
      <TextField
        className={classes.textField}
        name='email'
        label='Email'
        variant='outlined'
        value={user.email}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.textField}
        name='password'
        label='Password'
        type='password'
        variant='outlined'
        value={user.password}
        onChange={handleInputChange}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='submit'
      >
        Sign In
      </Button>
    </form>
  )
}

export default AuthorizationForm
