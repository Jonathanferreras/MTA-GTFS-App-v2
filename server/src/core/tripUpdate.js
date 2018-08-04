import Mta from 'mta-gtfs';
import { csvToJson } from '../utils';

// export const tripUpdate = async (train_route, feed_id) => {
//   const mta = new Mta({ 
//     key: process.env.MTA_GTFS_API_KEY,
//     feed_id: feed_id 
//   });

//   let train_stops = await csvToJson('server/src/files/trainStops.csv')
//     .filter(train_stop => train_stop.stop_id.length < 4)
//     .map(train_stop => train_stop.stop_id);

//   console.log(train_stops);
  

//   let train_trips = await mta.schedule(train_stops);

//   return train_trips;
// };

export const tripUpdate = async (train_route, feed_id) => {
  const mta = new Mta({ 
    key: process.env.MTA_GTFS_API_KEY,
    feed_id: feed_id 
  });

  let train_stops = await csvToJson('server/src/files/trainStops.csv')
    .filter(train_stop => train_stop.stop_id.length < 4)
    .map(train_stop => train_stop.stop_id);

  console.log(train_stops);
  

  let train_trips = await mta.schedule(train_stops);

  // let train_trip_stops = Object.keys(train_trips.schedule);

  // let clean_train_trips = train_trip_stops.forEach(train_trip_stop => {
  //   let stop = train_trips.schedule[train_trip_stop];
  //   let stop_N = stop.N.filter(stop => stop.routeId == train_route);
  //   let stop_S = stop.S.filter(stop => stop.routeId == train_route);


  // });

  return train_trips;
};