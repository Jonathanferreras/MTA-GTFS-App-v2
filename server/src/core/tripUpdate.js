import Mta from 'mta-gtfs';
import { csvToJson } from '../utils';

export const tripUpdate = async (train_route, feed_id) => {
  const mta = new Mta({ 
    key: process.env.MTA_GTFS_API_KEY,
    feed_id: feed_id 
  });

  //extracts train stops from csv file and returns an array
  let train_stops = await csvToJson('server/src/files/trainStops.csv')
    .filter(train_stop => train_stop.stop_id.length < 4);
  
  //array of stop ids to pass into api
  let train_stop_ids = train_stops.map(train_stop => train_stop.stop_id);

  //fetches train trips from api
  let train_trips = await mta.schedule(train_stop_ids);

  //filters northbound and southbound trips by train route and inserts stop id and stop name
  train_stops.forEach(train_stop => { 
    let stop = train_trips.schedule[train_stop.stop_id];

    train_trips.schedule[train_stop.stop_id].stop_id = train_stop.stop_id;
    train_trips.schedule[train_stop.stop_id].stop_name = train_stop.stop_name;
    train_trips.schedule[train_stop.stop_id].N = stop.N.filter(stop => stop.routeId == train_route);
    train_trips.schedule[train_stop.stop_id].S = stop.S.filter(stop => stop.routeId == train_route);
  });

  // turns object of train trips into array of train trips that have trips based on train route;
  return Object.values(train_trips.schedule).filter(trip => trip.N.length > 0 && trip.S.length > 0);
};