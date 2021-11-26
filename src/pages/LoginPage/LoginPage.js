import React,{useState}from 'react';
import { useHistory } from 'react-router-dom'
// import { useContext } from 'react';
// import { AuthContext } from '../../helpers/AuthProvider';
import axiosInstance from '../../helpers/axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockRoundedIcon from '@mui/icons-material/LockRounded';


const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: '#eeeeee',
        zIndex: '9999',
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    mainContainer: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        width: '50%',
        height: '397px',
        marginLeft: '25%',
        marginRight: '25%',
        boxShadow: '0px 2px 11px 0px rgb(60 56 56 / 49%)',
        borderRadius: '7px',
    },
    formControl: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
        padding: '2px 4px',
        alignItems: 'center',
        width: '60%',
        marginLeft: '15%',
    },
    button: {
        marginTop: theme.spacing(3),
    }
}));


const LoginPage = () => {

    const classes = useStyles();

    let history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
//    const { isAuthenticated } = useContext(AuthContext);
    const { email, password } = formData;

    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axiosInstance.post('/user/login',formData).then(res => {
                if (res.status === 200) {

                    localStorage.setItem('token',res.data.encryptedToken);
                    localStorage.setItem('role',res.data.role);
                    
                    if ( localStorage.getItem('role') === 'dean') history.push("/subject-budget") 
                    if (localStorage.getItem('role') === 'registrar') history.push("/courses")

                } 
            })
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) errors.forEach(error => {
                alert(error.msg)
            });
        }
    }


    return (    
        
        <div className={classes.overlay}>
            <div className={classes.mainContainer}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockRoundedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={onSubmit} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={e => onChange(e)}
                            
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => onChange(e)}

                            />
                            <Button className={classes.button}
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>

                        </form>
                    </div>
                </Container>
            </div>
        </div>   
    )
};

export default LoginPage;
