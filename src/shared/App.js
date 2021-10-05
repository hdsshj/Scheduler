import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from '../redux/configureStore';


import Calendar from "../pages/Calendar";
import SchDetail from '../pages/SchDetail'
import SchCreate from '../pages/SchCreate'
import { Button } from "../elements";

function App() {
  return (
    <BrowserRouter>
      <Route path = '/' component = {Calendar} exact/>
      <Route path = '/detail' component = {SchDetail} exact/>
      <Route path = '/create' component = {SchCreate} exact/>
    <Button is_float _onClick = {()=>{history.push('/')}}>+</Button>
    </BrowserRouter>
  );
}

export default App;
