import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import CollegeTable from '../../components/Tables/RegistrarTable/CollegeTable';
import CollegeForm from '../../components/Forms/RegistrarForms/CollegeForm';

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
    button:{
        display: 'flex',
        justifyContent: 'start',
    },

}));


const Colleges = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div className={classes.mainContainer}>
            <div className={classes.button} >
                <CollegeForm />
            </div>
            <br />
            <Paper elevation={2}> 
                <CollegeTable/>
            </Paper>
        </div>
    </div>
    )
}

export default Colleges;
