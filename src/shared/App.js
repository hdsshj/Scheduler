import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

import { history } from "../redux/configStore";

import Calendar from "../pages/Calendar";
import SchDetail from "../components/SchDetail";
import SchCreate from "../pages/SchCreate";

import { Button, Grid } from "../elements";

function App() {
  return (
    <Grid main height="100%" bg="#90AACB">
      <Grid padding="60px 0px">
        <ConnectedRouter history={history}>
          <Route path="/" component={Calendar} exact />
          <Route path="/detail/:sch_id" component={SchDetail} exact />
          <Route path="/create" component={SchCreate} exact />
          <Grid>
          <Button
            is_float
            _onClick={() => {
              history.push("/create");
            }}
          >
            +
          </Button>
          </Grid>
        </ConnectedRouter>
      </Grid>
    </Grid>
  );
}

export default App;
