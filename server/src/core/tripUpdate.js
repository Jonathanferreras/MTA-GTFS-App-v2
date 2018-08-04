import Mta from 'mta-gtfs';
import { csvToJson } from '../utils';

export const tripUpdate = async (train_stop_ids, feed_id) => {
  const mta = new Mta({ 
    key: process.env.MTA_GTFS_API_KEY,
    feed_id: feed_id 
  });

  //fetches train trips from api
  let train_trips = await mta.schedule(train_stop_ids);

  return train_trips;
};