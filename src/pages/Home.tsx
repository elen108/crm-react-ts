import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
})

const Home: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Navbar />
      <ContactList />
    </div>
  )
}

export default Home
