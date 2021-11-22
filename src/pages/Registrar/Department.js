import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import DepartmentTable from '../../components/Tables/RegistrarTable/DepartmentTable';
import DepartmentForm from '../../components/Forms/RegistrarForms/DepartmentForm'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(12),
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        paddingBottom: '100px',
    },

}));


const Department = () => {
    const classes = useStyles();
    return (

    <div className={classes.root}>
        <div className={classes.mainContainer}>
            <div className={classes.button} >
                <DepartmentForm />
            </div>
            <br />
            <Paper elevation={2}> 
                <DepartmentTable/>
            </Paper>
        </div>
    </div>

    )
}

export default Department;
