import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
       <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
