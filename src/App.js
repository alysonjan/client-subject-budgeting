import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PrivateRoute from './routes/PrivateRoute';
import { withTheme } from './themes/Theme';
import SubjectBudget from './pages/Dean/SubjectBudget';
import Login from './pages/Login/Login';
import Alert from './components/layout/Alert';


//Redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './helpers/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App =() => {

  
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
        <Sidebar/>
          <Route exact path='/' component={Login} />
          <section>
          <Alert/>
          <Switch>
            <PrivateRoute exact path='/subject-budget' component={SubjectBudget} />
          </Switch>
          </section>
        </div>
      </Router>
    </Provider>
  );
}

export default withTheme(App);
