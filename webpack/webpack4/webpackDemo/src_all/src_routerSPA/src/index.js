
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import List from './list';
import Home from './home';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
          </div>
        </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
