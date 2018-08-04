import './style.scss';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchTrainTrips } from '../../actions/fetch';

class TrainRoute extends Component {
  componentDidMount() {
    this.props.fetchTrainTrips(this.props.train);
  }

  componentDidUpdate(prevProps){
    if(prevProps.train !== this.props.train){
      this.props.fetchTrainTrips(this.props.train);
    }
  }

  render() {
    return (
      <div className="train-route">
        <ul className="train-route-stops">
          { this.props.train_stops.map((stop,index) => {
            return <li className="train-route-stop" key={ index.toString() }>{ stop[0] },{ stop[1] }</li>;
          })}       
        </ul>
      </div>
    );
  }
}

TrainRoute.propTypes = {
  fetchTrainTrips: PropTypes.func,
  train_route: PropTypes.object,
  train_stops: PropTypes.array,
  train: PropTypes.string,
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
  train_stops: state.fetch.train_stops,
});

export default connect(mapStateToProps, { fetchTrainTrips })(TrainRoute);