import { mongoose } from '../core';

let TrainRouteModel;

try {
  const train_route_schema = mongoose.Schema({
    route_id: String,
    agency_id: String,
    route_short_name: String,
    route_long_name: String,
    route_desc: String,
    route_type: String,
    route_url: String,
    route_color: String,
    route_text_color: String
  });

  TrainRouteModel = mongoose.model('train routes', train_route_schema);
} 
catch (error) {
  console.log('Error occurred while creating train route model: ' + error);
}

export default TrainRouteModel;