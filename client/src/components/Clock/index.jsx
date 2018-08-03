import './style.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { findTimeStamp } from '../../actions/find';
import { setClockTime } from '../../actions/set';

import moment from 'moment';

class Clock extends Component {
  componentDidMount(){
    let ms = 100;
    let s = 10 * ms;
    let min = 60 * s;

    setInterval(  () => this.props.setClockTime(), ms );
    setInterval( () => this.props.findTimeStamp(this.props.clock_time), min );
  }

  render() {
    return (
      <div className="clock">
        <span>{ this.props.clock_time }</span>
      </div>
    );
  }
}

Clock.propTypes = {
  findTimeStamp: PropTypes.func,
  setClockTime: PropTypes.func,
  clock_time: PropTypes.string,
  current_time_stamp: PropTypes.string,
};

const mapStateToProps = state => ({
  clock_time: state.set.clock_time,
  current_time_stamp: state.find.current_time_stamp
});

export default connect(mapStateToProps, { findTimeStamp, setClockTime })(Clock);