import { tripUpdate } from '../core';

export const getAllTrainTrips = async () => {
  let train_trips = await tripUpdate();

  return train_trips;
};

export const getTrainTripsByTrain = async (train_route_id) => {
  let train_feeds = {
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

  let feed_id = Object.keys(train_feeds).find(key => train_feeds[key].includes(train_route_id));
  
  let train_trips = await tripUpdate(train_route_id, feed_id);

  return train_trips;
};

export default { getAllTrainTrips, getTrainTripsByTrain };