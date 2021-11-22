import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import UserProfileTable from '../../components/Tables/RegistrarTable/UserProfileTable';
import UserProfileForm from '../../components/Forms/RegistrarForms/UserProfileForm';

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


const UserProfile = () => {
    const classes = useStyles();
    return (

    <div className={classes.root}>
        <div className={classes.mainContainer}>
            <div className={classes.button} >
                <UserProfileForm />
            </div>
            <br />
            <Paper elevation={2}> 
                <UserProfileTable/>
            </Paper>

        </div>
    </div>

    )
}

export default UserProfile;
