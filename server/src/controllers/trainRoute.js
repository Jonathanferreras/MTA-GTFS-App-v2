import { TrainRouteModel } from '../models';

export const getAllTrainRoutes = async () => {
  let train_routes = await TrainRouteModel.find({}, error => {
    if(error){
      console.log('Error occurred while fetching all train routes: ' + error);
    }
  });

  return train_routes.filter(train_route => !train_route.route_id.includes("X"));
};

export const getTrainRoute = async (train_route_id) => {
  // let train_route = TrainRouteModel.findOne({'route_id' : train_route_id }, error => {
  //   if(error){
  //     console.log('Error occurred while fetching train route: ' + error);
  //   }
  // }); 

  // return train_route;
};

export default { getAllTrainRoutes, getTrainRoute }; 