import React from 'react';
import './App.css';

import { Route, Switch, Link, useLocation } from 'react-router-dom';


import ButtonPage from './mui/button'
import HomePage from './page/home'


function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    console.log('page  ' + location.pathname)
  }, [location])
}

function App() {
  usePageViews();
  return (
    <div className="App">
      <header className="App-header">

          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/">
                <HomePage></HomePage>
              </Route>
              <Route path="/button">
                <ButtonPage></ButtonPage>
              </Route>
            </Switch>
          </div>
      </header>
    </div>
  );
}


export default App;
