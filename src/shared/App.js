import React from "react";
import {ConnectedRouter} from 'connected-react-router'
import { BrowserRouter, Route } from "react-router-dom";
import { history } from '../redux/configStore';


import Calendar from "../pages/Calendar";
import SchDetail from '../pages/SchDetail'
import SchCreate from '../pages/SchCreate'
import { Button } from "../elements";

function App() {
  return (
    <ConnectedRouter history = {history}>
      <Route path = '/' component = {Calendar} exact/>
      <Route path = '/detail' component = {SchDetail} exact/>
      <Route path = '/create' component = {SchCreate} exact/>
      <Button is_float _onClick = {()=>{history.push('/create')}}>+</Button>
    </ConnectedRouter>
  );
}

export default App;
