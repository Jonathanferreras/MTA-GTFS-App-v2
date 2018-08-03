import './style.scss';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { findSelectedTrainRoute } from '../../actions/find';

class TrainLine extends Component {
  // componentDidMount(){
    
  //   if(Object.getOwnPropertyNames(this.props.train_route).length == 0){
  //     console.log('is empty');

  //     // let selected_route = this.props.train_routes.indexOf(this.props.train);
      
  //     // this.props.findSelectedTrainRoute(this.props.train_routes[selected_route]); 
  //   }
  // }

  componentDidUpdate(prevProps) {
    if(prevProps.train_routes.length == 0){
      this.props.train_routes.forEach(train_route => {
        if(this.props.train == train_route.route_id){
          this.props.findSelectedTrainRoute(train_route);
        }
      });
    }
  }
  
  render() {
    if(this.props.train_route){
      const Style = {
        backgroundColor: `#${ this.props.train_route.route_color }`
      };

      return (
        <div className="train-line">
          <span className="train-line-sign" style={ Style } ><strong>{ this.props.train_route.route_id }</strong></span>
          <span className="train-name"><strong>{ this.props.train_route.route_long_name }</strong></span>
        </div>
      );
    } else {
      return <Fragment/>;
    }
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