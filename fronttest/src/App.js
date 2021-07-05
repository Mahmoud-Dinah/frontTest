import React, { Component } from 'react'

import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../src/component/Header.js';
import Main from '../src/component/Main';
import Favorite from '../src/component/Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
       <Header />
        <Switch>
          <Route exact path="/">
            {/* render our homepage component */}
            <Main />
          </Route>
          <Route exact path="/Favorite">
            {/* render the component responsible for rendering the favorites   */}
            <Favorite />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
    )
  }
}

export default App
