import { tripUpdate } from '../core';
import { TrainStopModel } from '../models';

const train_feeds = {
  //Feed id : train route id
  '1': ['1', '2', '3', '4', '5', '6'],
  '26': ['A', 'C', 'E', 'H'],
  '16': ['N', 'Q', 'R', 'W'],
  '21': ['B', 'D', 'F', 'M'],
  '2': ['L'],
  '11': ['SI'],
  '31': ['G'],
  '36': ['J', 'Z'],
  '51': ['7']  
};

export const getAllTrainTrips = async () => {};

export const getTrainTripsByTrain = async (train_route_id) => {
  let train_stops = await TrainStopModel.find({}, error => {
    if(error)
      console.log('Error occurred while fetching all train routes: ' + error);
  });

  let clean_train_stops = train_stops.filter(train_stop => train_stop.stop_id.length < 4);

  //get array of stop ids and determine feed id by train route id to pass into api
  let train_stop_ids = clean_train_stops.map(train_stop => train_stop.stop_id);
  let feed_id = Object.keys(train_feeds).find(key => train_feeds[key].includes(train_route_id));

  //fetch relevant train trips
  let train_trips = await tripUpdate(train_stop_ids, feed_id);

  //filter train trips by train route and insert stop id and name
  clean_train_stops.forEach(train_stop => { 
    let stop = train_trips.schedule[train_stop.stop_id];

    train_trips.schedule[train_stop.stop_id].stop_id = train_stop.stop_id;
    train_trips.schedule[train_stop.stop_id].stop_name = train_stop.stop_name;
    train_trips.schedule[train_stop.stop_id].N = stop.N.filter(stop => stop.routeId == train_route_id);
    train_trips.schedule[train_stop.stop_id].S = stop.S.filter(stop => stop.routeId == train_route_id);
  });

  return Object.values(train_trips.schedule).filter(trip => trip.N.length > 0 && trip.S.length > 0);
};

export default { getAllTrainTrips, getTrainTripsByTrain };