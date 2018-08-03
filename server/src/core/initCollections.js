import appRoot from 'app-root-path';
import { csvToJson } from './csvToJson';
import { TrainRouteModel, TrainStopModel } from '../models';

const train_stops  = convert_file.csvToJson(`${appRoot}server/src/files/trainStops.csv`);
const train_routes = convert_file.csvToJson(`${appRoot}server/src/files/trainRoutes.csv`);

const createCollection = async (entries, model) => {
  try {
    let collection_name = model.collection.collectionName;
    let collectionExists = Object.keys(model.db.collections).includes(collection_name);

    if(collectionExists)
      await model.remove({}, () => console.log(`Collection ${ collection_name } was dropped`));
      

    console.log(`Creating collection: ${ collection_name }`);
    await entries.forEach( entry => model.create(entry) ); 
  } 
  catch (error) {
    console.log('Error occurred while trying to create collections: ' + error);
  }
  finally {
    console.log('Done!' + '\n');
  }
};

createCollection(train_stops, TrainRouteModel);
createCollection(train_routes, TrainStopModel); 