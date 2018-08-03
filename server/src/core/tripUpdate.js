import Mta from 'mta-gtfs';
import { csvToJson } from '../utils';

const mta = new Mta({ key: api_key });

const api_key = process.env.MTA_GTFS_API_KEY;
const file_path = 'server/src/files';

export const tripUpdate = async () => {
  let csv = `${ file_path }/trainStops.csv`;

  let train_stops = await csvToJson(csv)
    .filter(train_stop => train_stop.stop_id.length < 4)
    .map(train_stop => Number(train_stop.stop_id));

  let train_trips = await mta.schedule(train_stops);

  return train_trips;
};