//Exports a React Component
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SportDashboardPage from '../components/SportDashboardPage';
import AddMySportPage from '../components/AddMySportPage';
import EditMySportPage from '../components/EditMySportPage';
import NotFoundPage from '../components/NotFoundPage';
  
export const history = createHistory();

 const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={SportDashboardPage} exact={true} />
          <Route path="/create" component={AddMySportPage} />
          <Route path="/edit/:id" component={EditMySportPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );

  export default AppRouter;