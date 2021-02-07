import React from 'react';
import {Route} from 'react-router-dom'
import "./App.css"
import "react-datepicker/dist/react-datepicker.css";
import LoginForm from './component/auth/LoginForm'
import MainForm from './component/home/MainForm'
import CalendarForm from './component/calendar/CalendarForm';

function App() {

    return(
        <div>
            <Route exact component={LoginForm} path='/' />
            <Route component={MainForm} path='/home' />
            <Route component={CalendarForm} path='/calendar' />
        </div>
    );
}

export default App;
