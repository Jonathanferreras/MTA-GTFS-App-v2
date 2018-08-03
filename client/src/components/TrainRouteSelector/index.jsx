import './style.scss';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Collapse, Button } from 'reactstrap';
import { PropTypes } from 'prop-types';

import TrainRouteButton from './TrainRouteButton';
import { fetchTrainRoutes } from '../../actions/fetch';
import { findSelectedTrainRoute } from '../../actions/find';

class TrainRouteSelector extends Component {
  constructor(props){
    super(props);

    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.props.fetchTrainRoutes();
  }

  toggle() {
    console.log('toggled');
    
    this.setState({ collapse: !this.state.collapse }); 
  }

  render() {
    return (
      <Container>
        <div className="train-route-selector">
          <Button className="selector-toggle-btn" outline color="info" onClick={ this.toggle }>Select a route</Button>
          <Collapse isOpen={ this.state.collapse }>
            <div className="selector-route-btns">
              <Container>
                { 
                  this.props.train_routes.length > 0 && this.props.train_routes.map(((train_route, index) => {
                    if(train_route.route_color == ""){
                      train_route.route_color = '6c757d';
                    }

                    return <Link key={ index.toString() } to={`/train/${ train_route.route_id }`}>
                      <TrainRouteButton
                        key={ index.toString() }
                        color={ train_route.route_color }
                        id={ train_route.route_id } 
                        onClick={ () => {
                          this.toggle();
                          this.props.findSelectedTrainRoute(train_route); 
                          setTimeout(() => { console.log('collapsing'); }, 3000); 
                          // this.props.fetchTrainTrips(train_route.route_id);
                        }}
                      />
                    </Link>;
                  })) 
                }
              </Container>
            </div>
          </Collapse>
        </div>
      </Container>
    );
  }
}

TrainRouteSelector.propTypes = {
  findSelectedTrainRoute: PropTypes.func,
  fetchTrainRoutes: PropTypes.func,
  onClick: PropTypes.func,
  train_routes: PropTypes.array,
};

const mapStateToProps = state => ({
  train_routes: state.fetch.train_routes
});

export default connect(mapStateToProps, { fetchTrainRoutes, findSelectedTrainRoute })(TrainRouteSelector);