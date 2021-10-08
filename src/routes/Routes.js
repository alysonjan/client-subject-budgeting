import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Authguard
import ProtectedRoute from './ProtectedRoute';
import { AuthContext } from '../helpers/AuthProvider';

//Sidebar
import SidebarComponent from '../components/Sidebar/SidebarComponent';

// Auth pages
import LoginPage from '../pages/LoginPage/LoginPage';

// Pages
import SubjectBudgetPage from '../pages/DeanPages/SubjectBudgetPage';

// Style
import '../App.css';

const RouteComponent = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return (
            <div className='App'>
                <SidebarComponent />
                <Switch>
                    <ProtectedRoute exact path='/subject-budget' component={SubjectBudgetPage} />
                    <Redirect to='/subject-budget' />
                </Switch>
            </div>
        );
    }

    return (
        <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Redirect to='/login' />
        </Switch>
    );
};

export default RouteComponent;