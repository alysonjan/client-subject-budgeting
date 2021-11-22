import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import SubjectTable from '../../components/Tables/RegistrarTable/SubjectTable';
import SubjectForm from '../../components/Forms/RegistrarForms/SubjectForm';


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


const Subjects = () => {
    const classes = useStyles();
    return (

    <div className={classes.root}>
        <div className={classes.mainContainer}>
            <div className={classes.button} >
                <SubjectForm />
            </div>
            <br />
            <Paper elevation={2}> 
                <SubjectTable/>
            </Paper>
        </div>
    </div>

    )
}

export default Subjects;
