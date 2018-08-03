import { tripUpdate } from '../core';

export const getAllTrainTrips = async () => {
  let train_trips = await tripUpdate();

  return train_trips;
};

export const getTrainTripsByTrain = (train_route_id) => {
  console.log('getTrainTripsByTrain');
};

export default { getAllTrainTrips, getTrainTripsByTrain };