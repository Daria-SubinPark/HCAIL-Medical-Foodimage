import React from 'react';
import { Route, Switch } from 'react-router-dom'
import "./App.css"
import "react-datepicker/dist/react-datepicker.css";
import LoginForm from './component/auth/LoginForm'
import MainForm from './component/home/MainForm'
import PhotoForm from "./component/photo/PhotoForm";

function App() {

    return(
        <div>
            <Route exact component={LoginForm} path='/' />
            <Route component={MainForm} path='/home' />
            <Route component={PhotoForm} path='/photo/:mid' />
        </div>
    );
}

export default App;
