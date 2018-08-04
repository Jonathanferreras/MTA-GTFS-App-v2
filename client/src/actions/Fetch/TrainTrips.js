import { FETCH_TRAIN_TRIPS } from '../../constants/types';

export const fetchTrainTrips = (route_id) => dispatch => {
  let url = `/api/train_trip/${ route_id }`;

  console.log('fetching train trips...');
  fetch(url)
  .then(res => {
    console.log('Received!');
    return res.json();
  })
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_TRIPS,
      payload: data
    })
  )
  .catch(error => 
    console.log('Error occurred while fetching train trips: ' + error)
  );
};