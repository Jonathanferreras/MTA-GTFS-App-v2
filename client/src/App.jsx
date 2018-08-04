import './styles/style.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';

import { 
  Nav,
  Clock,
  TrainRouteSelector, 
  TrainLine,
  TrainRoute,
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
      { match.params.train_id && 
        <Container>
          <Row>
            <Col xs="12"><TrainLine train={ match.params.train_id } /></Col>
            <Col xs="6"></Col>
            <Col xs="12" md="6"> <TrainRoute train={ match.params.train_id } /></Col>
          </Row>
        </Container>
      }
    </Fragment>
  );
};

Layout.propTypes = {
  match: PropTypes.object
};

export default App;