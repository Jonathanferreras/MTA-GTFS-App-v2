import React, { Component, Fragment } from 'react';
import { 
  BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

import { 
  Nav,
  Clock, 
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
    </Fragment>
  );


  // if(match.params.train_id){
  //   return(
  //     <div>
  //       { match.params.train_id }
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h2>Hello world</h2>
  //     </div>
  //   );
  // }
};

Layout.propTypes = {
  match: PropTypes.object
};

export default App;