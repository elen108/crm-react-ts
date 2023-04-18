import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  leftAside: {
    width: '20%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  link: {
    width: '100%',
    textDecoration: 'none',
    color: 'black',

    '&:hover, &:active': {
      background: '#ffd700',
    },
  },
  title: {
    padding: 20,
  },
})

const Navbar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.leftAside}>
      <h1 className={classes.title}>LOGO</h1>
      <Link className={classes.link} to='/home'>
        <Typography variant='h6'>Total Contacts</Typography>
      </Link>
      <Link className={classes.link} to='/calendar'>
        <Typography variant='h6'>Calendar</Typography>
      </Link>
      <Link className={classes.link} to='/report'>
        <Typography variant='h6'>Project Report</Typography>
      </Link>
    </div>
  )
}

export default Navbar
