import { FETCH_TRAIN_ROUTES } from '../../constants/types';

export const fetchTrainRoutes = () => dispatch => {
  let url = '/api/train_route/all';

  fetch(url)
  .then(res => res.json())
  .then(train_routes => 
    dispatch({
      type: FETCH_TRAIN_ROUTES,
      payload: train_routes
    })
  );
};
