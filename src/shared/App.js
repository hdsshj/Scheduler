import React from "react";
import {ConnectedRouter} from 'connected-react-router'
import { BrowserRouter, Route } from "react-router-dom";
import { history } from '../redux/configStore';

import { actionCreators as schActions } from "../redux/modules/schedule";
import {useSelector, useDispatch} from 'react-redux'


import Calendar from "../pages/Calendar";
import SchDetail from '../pages/SchDetail'
import SchCreate from '../pages/SchCreate'
import { Button, Grid } from "../elements";

function App() {
  const dispatch = useDispatch()
  const sch_list = useSelector((state) => state.schedule.sch_list)

  return (
    <Grid main height = '100%'bg = '#90AACB'>    
    <Grid padding = '60px'>
    <ConnectedRouter history = {history}>
      <Route path = '/' component = {Calendar} exact/>
      <Route path = '/detail/:sch_id' component = {SchDetail} exact/>
      <Route path = '/create' component = {SchCreate} exact/>
      <Button is_float _onClick = {()=>{history.push('/create')}}>+</Button>
    </ConnectedRouter>
    </Grid>
    </Grid>
  );
}

export default App;
