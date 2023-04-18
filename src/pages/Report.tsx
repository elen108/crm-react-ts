import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../components/Navbar'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    mainField: {
      width: '80%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

const Report: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        < Navbar />
        <div className={classes.mainField}>
             <h1>Project Report</h1>
        </div>
    </div>
    )
}

export default Report