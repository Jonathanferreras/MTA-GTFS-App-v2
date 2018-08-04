import './styles/style.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PropTypes } from 'prop-types';

import { 
  Nav,
  Clock,
  TrainRouteSelector, 
  TrainLine
} from './components';

class App extends Component {
  render(){
    return(
      <Router>
        <Fragment>
          <Route exact path="/" component={ Layout } />
          <Route path="/train/:train_id" render={ Layout } />  
        </Fragment>
      </Router>
    );
  }
}

const Layout = ({ match }) => {
  return(
    <Fragment>
      <Nav />
      <Clock />
      <TrainRouteSelector/>
      {/* conditional render */}
      { match.params.train_id && <TrainLine train={ match.params.train_id } /> }  
    </Fragment>
  );
};

Layout.propTypes = {
  match: PropTypes.object
};

export default App;