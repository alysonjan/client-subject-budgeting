import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import SubjectBudgetTable from '../../components/Tables/DeanTable/SubjectBudgetTable';
import SubjectBudgetForm from '../../components/Forms/DeanForms/SubjectBudgetForm';

import axiosInstance from '../../helpers/axios';

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
        justifyContent: 'end',
    },
}));


const SubjectBudgetPage = () => {
    const classes = useStyles();

    const [subjectBudget, setSubjectBudget] = useState([])

    useEffect(()=>{
        axiosInstance.get('/get/subject-budget').then(res => {   
            setSubjectBudget(res.data)
        });
    },[])


    return (
    <div className={classes.root}>
        <div className={classes.mainContainer}>
        <div className={classes.button} >
            <SubjectBudgetForm />
        </div>
        <br />
            <Paper elevation={2}> 
                <SubjectBudgetTable subjectBudget={subjectBudget} />
            </Paper>

        </div>
    </div>

    )
}

export default SubjectBudgetPage
