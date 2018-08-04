import express from 'express';
import { trainTrip as controller } from '../controllers';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let train_trips = await controller.getAllTrainTrips();

    res.send(train_trips);
  } 
  catch (error) {
    console.log('Error Occurred while getting train trips: ' + error);
    res.status(500).send();
  }
});

router.get('/:train', async (req, res, next) => {
  try {
    let train_trips = await controller.getTrainTripsByTrain(req.params.train);

    res.send(train_trips);
  } 
  catch (error) {
    console.log('Error Occurred while getting train trips: ' + error);
    res.status(500).send();
  }
});

export default router;