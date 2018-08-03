import { TrainRouteModel } from '../models';

export const getAllTrainRoutes = async () => {
  let t = await TrainRouteModel.find({}, (error) => {
    if(error){
      console.log('Error occurred while fetching all train routes: ' + error);
    }
  });

  return t.filter(train_route => !train_route.route_id.includes("X"));
};

export const getTrainRoute = async (train_route_id) => {
  let t = TrainRouteModel.findOne({'route_id' : train_route_id }, (error, train_route) => {
    if(error){
      console.log('Error occurred while fetching train route: ' + error);
    }
  }); 

  return t;
};

export default { getAllTrainRoutes, getTrainRoute };