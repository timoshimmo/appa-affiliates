import { Component } from 'react';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from './lib/routes';
//import { history } from './helpers/history';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <RoutesComponent />
        </Router>
      </div>
    );
  }
}
