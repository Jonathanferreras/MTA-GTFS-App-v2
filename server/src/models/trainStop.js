import { mongoose } from '../core';

let TrainStopModel;

try {
  const train_stop_schema = mongoose.Schema({
    stop_id: String,
    stop_code: String,
    stop_name: String,
    stop_desc: String,
    stop_lat: String,
    stop_lon: String,
    zone_id: String,
    stop_url: String,
    location_type: String,
    parent_station: String
  });

  TrainStopModel = mongoose.model('train stops', train_stop_schema);
} 
catch (error) {
  console.log('Error occurred while creating train stop model: ' + error);
}

export default TrainStopModel;