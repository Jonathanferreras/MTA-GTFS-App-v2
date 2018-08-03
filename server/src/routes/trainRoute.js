import express from 'express';
import { trainRoute } from '../controllers';

const router = express.Router();

router.get('/all', async (req, res, next) => {
  try {
    let train_routes = await trainRoute.getAllTrainRoutes();

    res.send(train_routes);
  } 
  catch (error) {
    console.log('Error Occurred while getting all train routes: ' + error);
    res.status(500).send();
  }
});

export default router;