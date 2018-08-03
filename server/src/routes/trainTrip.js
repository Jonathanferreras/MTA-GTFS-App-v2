import express from 'express';
import { trainTrip } from '../controllers';

const router = express.Router();

router.get('/all', async (req, res, next) => {
  try {
    let train_trips = await trainTrip.getAllTrainTrips();

    res.send(train_trips);
  } 
  catch (error) {
    console.log('Error Occurred: ' + error);
    res.status(500).send();
  }
});

export default router;