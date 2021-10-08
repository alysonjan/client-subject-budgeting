import React,{useState}from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../../actions/auth';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockIcon from '@mui/icons-material/Lock';


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


const LoginPage = ({login, isAuthenticated }) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email,password)
    }

    if (isAuthenticated) {
        return <Redirect to="/subject-budget" />
    }

    return (    
        
        <div className={classes.overlay}>
            <div className={classes.mainContainer}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={e => onSubmit(e)} >
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
                                value="login"
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

LoginPage.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateProps,
    {
        login 
    }
)(LoginPage);
