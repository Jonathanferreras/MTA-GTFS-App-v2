import './style.scss';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { findSelectedTrainRoute } from '../../actions/find';

class TrainLine extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.train_routes.length !== this.props.train_routes){
      this.props.train_routes.forEach(train_route => {
        if(this.props.train == train_route.route_id){
          this.props.findSelectedTrainRoute(train_route);
        }
      });
    }
  }
  
  render() {
    const Style = {
      backgroundColor: `#${ this.props.train_route.route_color }`
    };

    return (
      <div className="train-line">
        <div className="train-line-sign" style={ Style } ><strong>{ this.props.train_route.route_id }</strong></div>
        <div className="train-line-name"><strong>{ this.props.train_route.route_long_name }</strong></div>
      </div>
    );
  }
}

TrainLine.propTypes = {
  findSelectedTrainRoute: PropTypes.func,
  train_routes: PropTypes.array,
  train_route: PropTypes.object,
  train: PropTypes.string,
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
  train_routes: state.fetch.train_routes,
});

export default connect(mapStateToProps, { findSelectedTrainRoute })(TrainLine);