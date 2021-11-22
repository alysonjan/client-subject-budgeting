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
import testPage from '../pages/DeanPages/TestSubject';
//Registrar
import Colleges from '../pages/Registrar/Colleges';
import Department from '../pages/Registrar/Department';
import Courses from '../pages/Registrar/Courses';
import Subjects from '../pages/Registrar/Subjects';
import Curriculum from '../pages/Registrar/Curriculum';
import FacultyManagement from '../pages/Registrar/FacultyManagement';
import UserProfile from '../pages/Registrar/UserProfile';

// Style
import '../App.css';

const RouteComponent = () => {
    const { isAuthenticated } = useContext(AuthContext);
    let userrole = localStorage.getItem("role")
    if (isAuthenticated) {
        return (
            <div className='App'>
                <SidebarComponent />
                <Switch>
                    <ProtectedRoute exact path='/subject-budget' component={SubjectBudgetPage} />
                    <ProtectedRoute exact path='/test' component={testPage} />
                    <ProtectedRoute exact path='/colleges' component={Colleges} />
                    <ProtectedRoute exact path='/department' component={Department} />
                    <ProtectedRoute exact path='/courses' component={Courses} />
                    <ProtectedRoute exact path='/subjects' component={Subjects} />
                    <ProtectedRoute exact path='/curriculum' component={Curriculum} />
                    <ProtectedRoute exact path='/facultymanagement' component={FacultyManagement} />
                    <ProtectedRoute exact path='/userprofile' component={UserProfile} />
                    {userrole === 'dean' ? <Redirect to='/subject-budget' /> 
                    : userrole === 'registrar' ?  <Redirect to='/colleges' />
                    : null}
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